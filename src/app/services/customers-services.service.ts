import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ICustomer } from '../modal/customer';
import { IProfile } from '../modal/profile';

@Injectable({
  providedIn: 'root'
})
export class CustomersServices {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }
  public getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>('http://localhost:8001/customers');
  }
  public getProfile(): Observable<IProfile[]> {
    return this._http.get<IProfile[]>('http://localhost:3001/profile');
  }
  public getCustomerById(id: number): Observable<ICustomer> {
    console.log(id);
    return this._http.get<ICustomer>(`http://localhost:8001/customers/${id}`);
  }

  public createCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const url = 'http://localhost:8001/customers';
    console.log(customer);
    // tslint:disable-next-line: max-line-length
    return this._http.post<ICustomer>(url, customer, {headers}).pipe( tap(data => console.log('created Customer' + JSON.stringify(data))), catchError(this.handleError));
  }

  public updateCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const url = `http://localhost:8001/customers/${customer.customerId}`;
    // tslint:disable-next-line: max-line-length
    return this._http.put<ICustomer>(url, customer, {headers}).pipe( tap(() => console.log('update Customer: ' + customer.customerId)), map(() => customer), catchError(this.handleError));
  }

  deleteCustomer(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:8001/customers/${id}`;
    return this._http.delete<ICustomer>(url, { headers })
    .pipe(
    tap(data => console.log('deleteProduct: ' + id)),
    catchError(this.handleError)
    );
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
