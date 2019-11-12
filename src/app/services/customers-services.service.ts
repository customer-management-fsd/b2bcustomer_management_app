import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ICustomer } from '../model/customer';
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
    return this._http.get<ICustomer>(`http://localhost:3000/customers/${id}`);
  }
  public createCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<ICustomer>
    (`http://localhost:3000/customers`, customer, {headers})
    .pipe(tap(data => console.log('Created Customer successfully' + JSON.stringify(data))), catchError(this.handleError));

  }
  deleteCustomer(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/customers/${id}`;
    return this._http.delete<ICustomer>(url, { headers })
    .pipe(
    tap(data => console.log('deleteCustomer: ' + id)),
    catchError(this.handleError)
    );
    }

  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/customers/${customer.customerId}`;
    return this._http.put<ICustomer>(url, customer, { headers })
    .pipe(
    tap(() => console.log('Update Customer: ' + customer.customerId)),
    // Return the customer on an update
    map(() => customer),
    catchError(this.handleError)
    );
}

// tslint:disable-next-line: align
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
