import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../modal/customer';
import { CustomersServices } from '../services/customers-services.service';
import { IAddress } from '../modal/address';

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
  address: IAddress;
  btnenable=false;
  // tslint:disable-next-line: variable-name
  constructor(private _customerServices: CustomersServices) { }
  ngOnInit() {
    this._customerServices.getCustomers().subscribe((customers: ICustomer[]) => {
      this.customers = customers;
      console.log(this.customers[0].address[0].City);
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

    showHide(){
      console.log(this.btnenable)
     this.btnenable = !this.btnenable
    }
}
