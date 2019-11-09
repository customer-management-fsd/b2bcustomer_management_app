import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ICustomer } from '../modal/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomersServicesService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }
  public getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>('http://localhost:3000/customers');
  }
}
