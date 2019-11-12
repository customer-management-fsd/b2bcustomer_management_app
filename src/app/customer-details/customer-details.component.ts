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
  // tslint:disable-next-line: variable-name
  constructor(private _customerServices: CustomersServices, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._customerServices.getCustomerById(id).subscribe(customers => this.customers = customers);
  }
  onBack() {
    this._router.navigate(['/customer']);
  }

}
