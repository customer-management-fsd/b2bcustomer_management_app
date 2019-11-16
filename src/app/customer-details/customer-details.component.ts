import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../modal/customer';
import { CustomersServices } from '../services/customers-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers: ICustomer;
  latitude: number;
  longitude: number;
  id: number;
  // tslint:disable-next-line: variable-name
  constructor(private _customerServices: CustomersServices, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    this._customerServices.getCustomerById(this.id).subscribe((customers) => { 
      this.customers = customers;
      console.log(this.customers);
    });
    this.latitude = 88.88888888888888;
    this.longitude = 99.9999999999999999;
    // this.latitude = this.customers.latitude;
    // this.longitude = this.customers.longitude;
  }
  onBack() {
    this._router.navigate(['/customer']);
  }

}
