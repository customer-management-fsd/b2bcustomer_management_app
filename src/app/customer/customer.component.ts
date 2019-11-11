import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../modal/customer';
import { CustomersServicesService } from '../services/customers-services.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: ICustomer[];
  items = [];
  pageOfItems: Array<any>;

  // tslint:disable-next-line: variable-name
  constructor(private _cust: CustomersServicesService) { }

  ngOnInit() {

    this._cust.getCustomers().subscribe(c => {this.customers = c;

      // tslint:disable-next-line: align
      // this.items = Array(this.customers.length).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
      //                                         return console.log(this.items);
      //                                       });

      // tslint:disable-next-line: align
      this.items = this.customers.map(({ customerId,
                                       customerFirstName,
                                       customerLastName,
                                       address,
                                       orders,
                                       imageUrl }) => (
                                        { customerId,
                                          customerFirstName,
                                          customerLastName,
                                          address,
                                          orders,
                                          imageUrl }

                                              ));
                                              return console.log(this.customers);
                                            });




  }

onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}




}
