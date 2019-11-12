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

  downloadFile(data, filename = 'data') {
    // tslint:disable-next-line: max-line-length
    const csvData = this.ConvertToCSV(data, [
                                            'customerId',
                                            'customerFirstName',
                                            'customerLastName',
                                            'state',
                                            'country',
                                            'latitude',
                                            'longitude',
                                            'imageUrl',
                                            'orders.productName',
                                            'orders_productCode',
                                            'orders_purchaseDate',
                                            'orders_price',
                                            'orders_starRating'
                                          ]);
    console.log(csvData);
    const blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    const dwldLink = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  // if Safari open in new window to save file with random filename.
        dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

ConvertToCSV(objArray, headerList) {
     const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = 'S.No,';

     // tslint:disable-next-line: forin
     for (const index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i + 1) + '';
         // tslint:disable-next-line: forin
         for (const index in headerList) {
            const head = headerList[index];

            line += ',' + array[i][head];
         }
         str += line + '\r\n';
     }
     return str;
 }

}
