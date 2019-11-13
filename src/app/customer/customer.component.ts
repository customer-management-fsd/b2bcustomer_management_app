import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../model/customer';
import { CustomersServices } from '../services/customers-services.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  showCard = true;
  cardN = 1;
  showList = false;
  listN = 2;
  customers: ICustomer[];
  // tslint:disable-next-line: variable-name
  constructor(private _customerServices: CustomersServices) { }
  ngOnInit() {
    this._customerServices.getCustomers().subscribe((customers: ICustomer[]) => {
      this.customers = customers;
    });
  }

  showOrHide = (n: number) => {
    if (n === 1 && this.showCard === false) {
      this.showCard = !this.showCard;
      this.showList = !this.showList;
    }
    if (n === 2 && this.showList === false) {
      this.showCard = !this.showCard;
      this.showList = !this.showList;
    }
    }


}
