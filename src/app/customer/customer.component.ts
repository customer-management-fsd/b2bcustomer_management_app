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

  // page = 1;
  showCard = true;
  pageOfItems: Array<any>;
  cardN = 1;
  showList = false;
  btnenable = false;
  listN = 2;
  customers: ICustomer[];
  address: IAddress;
  // filteredList: ICustomer[];
  // text: string;
  items = [];
  // tslint:disable-next-line: variable-name
  constructor(private _customerServices: CustomersServices) {
    // this.text = '';
    this.customers = [];
   }
  ngOnInit() {
    this._customerServices.getCustomers().subscribe((customers: ICustomer[]) => {
      this.customers = customers;
      // this.pageOfItems = this.filteredList;
      // this.filteredList = customers;
      this.items = this.customers.map(({ customerId,
        customerFirstName,
        customerLastName,
        state,
        country,
        latitude,
        longitude,
        imageUrl }) => (
         { customerId,
           customerFirstName,
           customerLastName,
           state,
           country,
           latitude,
           longitude,
           imageUrl }

               ));
    });
  }

  // get filterText() {
  //   return this.text;
  // }

  // set filterText(newValue: string) {
  //   this.text = newValue;
  //   this.filteredList = this.text ? this.applyFilter(this.text) : this.customers;
  //   console.log(this.filteredList);
  // }

  // applyFilter(name: string) {
  //   return this.customers.filter((cust: any) => cust.customerFirstName.indexOf(name) !== -1);
  // }

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
    showHide() {
      console.log(this.btnenable);
      this.btnenable = !this.btnenable;
    }
    onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
      // console.log(this.pageOfItems);
  }
}
