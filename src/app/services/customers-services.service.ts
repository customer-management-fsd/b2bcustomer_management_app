import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ICustomer } from '../modal/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomersServices {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }
  public getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>('http://localhost:3000/customers');
  }
  public getCustomerById(id: number): Observable<ICustomer> {
    return this._http.get<ICustomer>(`http://localhost:3000/customers/?customerId=${id}`);
  }

  public createCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const url = 'http://localhost:3000/customers';
    // tslint:disable-next-line: max-line-length
    return this._http.put<ICustomer>(url, customer, {headers}).pipe( tap(data => console.log('created Customer' + JSON.stringify(data))), catchError(this.handleError));
  }

  public updateCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const url = `http://localhost:3000/customers/?customerId=${customer.customerId}`;
    // tslint:disable-next-line: max-line-length
    return this._http.put<ICustomer>(url, customer, {headers}).pipe( tap(() => console.log('update Customer: ' + customer.customerId)), map(() => customer), catchError(this.handleError));
  }

  private handleError(err: ErrorEvent) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
         // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
     errorMessage = `Backend returned code ${err.error.status}: ${err.error.body.error}`;
  }
    console.error(err);
    return throwError(errorMessage);
  }
}
