import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../modal/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: ICustomer[];
  constructor() { }
  ngOnInit() {
  }

}
