import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { CustomersServices } from '../services/customers-services.service';
import { ICustomer } from '../modal/customer';
import { IOrders } from '../modal/orders';


@Component({
  selector: 'app-customer-order-statistics',
  templateUrl: './customer-order-statistics.component.html',
  styleUrls: ['./customer-order-statistics.component.css']
})
export class CustomerOrderStatisticsComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  customers: ICustomer[];
  orders = [];

  totalOrders: IOrders[] = [];
  // tslint:disable-next-line: variable-name
  constructor(private _customerService: CustomersServices) {}

    // count: Array<{String, Number}>;
    ngOnInit() {
      this._customerService.getCustomers()
      .subscribe((customers: ICustomer[]) => {
        this.orders = customers.map(custOrd => custOrd.orders);
        console.log(this.orders);
        this.orders.forEach((internalArray) => {

          internalArray.forEach((order) => {
            this.totalOrders.push(order);
          });

        });
        console.log(this.totalOrders);
        // tslint:disable-next-line: only-arrow-functions

        const onePlus = this.totalOrders.filter(order => order.productName === 'OnePlus 7 Pro');
        const laptop = this.totalOrders.filter(order => order.productName === 'Laptop');
        const iphone = this.totalOrders.filter(order => order.productName === 'iphone 11');
        const watch = this.totalOrders.filter(order => order.productName === 'Watch');
        const refrigerator = this.totalOrders.filter(order => order.productName === 'Refrigerator');
        const tv = this.totalOrders.filter(order => order.productName === 'Television');
        const ac = this.totalOrders.filter(order => order.productName === 'Air conditioner');
        const table = this.totalOrders.filter(order => order.productName === 'Table');

        const chart = new CanvasJS.Chart('chartContainer', {
          axisY: {
            title: 'Units Sold per Product'
           },
           axisX: {
            title: 'Products'
           },
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: 'Product Statistics'
          },
          data: [{
            type: 'column', axisY: {minimum: 0, maximum: 20, interval: 1},
            dataPoints: [
              { y: onePlus.length, label: 'OnePlus 7 Pro' },
              { y: refrigerator.length, label: 'Refrigerator' },
              { y: laptop.length, label: 'Laptop' },
              { y: iphone.length, label: 'IPhone' },
              { y: tv.length, label: 'Television' },
              { y: ac.length, label: 'Air Conditioner' },
              { y: watch.length, label: 'Watch' },
              { y: table.length, label: 'Table' }
            ]
          }]
      }
      );

        chart.render();

});

    }

  }
