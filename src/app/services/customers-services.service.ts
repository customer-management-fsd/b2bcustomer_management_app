import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
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
    return this._http.get<ICustomer>(`http://localhost:3000/customers/${id}`);
  }
}
