import { Component, OnInit } from '@angular/core';
import {CustomersServices} from '../services/customers-services.service';
import { ICustomer } from '../modal/customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customers: ICustomer[];
  IndividualOrdersTotal = [];
  singleCustomer: ICustomer;
  id: number;
  // tslint:disable-next-line: variable-name
  constructor(private _customerService: CustomersServices, private _route: ActivatedRoute) { }
  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    if (this.id === 0) {

      this._customerService.getCustomers()
    .subscribe((customers: ICustomer[]) => {
      this.customers = customers;
      this.customers.forEach((customer) => {
        let sum = 0;
        // tslint:disable-next-line: no-string-literal
        for (const order of customer['orders']) {
             // tslint:disable-next-line: no-string-literal
             sum += order['price'];
          }
        this.IndividualOrdersTotal.push(sum);
      });
      });
    } else {
    this.id = +this._route.snapshot.paramMap.get('id');
    this._customerService.getCustomerById(this.id).subscribe(singleCustomer => {
      this.singleCustomer = singleCustomer;
      console.log(this.singleCustomer);
      let sum = 0;
      // tslint:disable-next-line: no-string-literal
      for (const order of singleCustomer[0].orders) {
        // tslint:disable-next-line: no-string-literal
        sum += order['price'];
        }
      this.IndividualOrdersTotal.push(sum);
});
    }
    }
}
