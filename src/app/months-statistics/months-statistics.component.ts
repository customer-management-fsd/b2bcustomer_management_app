import { Component, OnInit } from '@angular/core';
// import  * as CanvasJS from 'canvasjs';
import * as CanvasJS from './canvasjs.min';
import {CustomersServices} from '../services/customers-services.service';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ICustomer } from '../modal/customer';
import { IOrders } from '../modal/orders';
@Component({
  selector: 'app-months-statistics',
  templateUrl: './months-statistics.component.html',
  styleUrls: ['./months-statistics.component.css']
})
export class MonthsStatisticsComponent implements OnInit {

  customers: ICustomer[];
  orders = [];

  totalOrders: IOrders[] = [];
  monthlyProductsSold = new Array(13);


  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: variable-name
  constructor(private _customerService: CustomersServices) {}

  ngOnInit() {
    for (let i = 0; i < 13; i++) {
      this.monthlyProductsSold[i] = 0;
    }



    this._customerService.getCustomers()
    .subscribe((customers: ICustomer[]) => {
      // this.customers = customers;
      this.orders = customers.map(custOrd => custOrd.orders);
      console.log(this.orders);
      this.orders.forEach((internalArray) => {

        internalArray.forEach((order) => {
          this.totalOrders.push(order);
        });

      });

      this.totalOrders.filter(order => {
        // tslint:disable-next-line: no-unused-expression
        const filteredMonth = order.purchaseDate.split('-')[1];


        if (filteredMonth === '01') {
        this.monthlyProductsSold[1]++;
        }
        if (filteredMonth === '02') {
          this.monthlyProductsSold[2]++;
          }
        if (filteredMonth === '03') {
            this.monthlyProductsSold[3]++;
            }
        if (filteredMonth === '04') {
              this.monthlyProductsSold[4]++;
              }
        if (filteredMonth === '05') {
                this.monthlyProductsSold[5]++;
                }
        if (filteredMonth === '06') {
                  this.monthlyProductsSold[6]++;
                  }
        if (filteredMonth === '07') {
                    this.monthlyProductsSold[7]++;
                    }
        if (filteredMonth === '08') {
                      this.monthlyProductsSold[8]++;
                      }
        if (filteredMonth === '09') {
                        this.monthlyProductsSold[9]++;
                        }
        if (filteredMonth === '10') {
                          this.monthlyProductsSold[10]++;
                          }
        if (filteredMonth === '11') {
                            this.monthlyProductsSold[11]++;
                            }
        if (filteredMonth === '12') {
                              this.monthlyProductsSold[12]++;
                              }

        });
        // console.log(this.monthlyProductsSold[3]);
      // console.log(this.monthlyProductsSold);

      const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: 'Monthly Statistics in an year'
        },
        data: [{
          type: 'area', axisY: {minimum: 1, maximum: 20, interval: 1},
          dataPoints: [
            { y: this.monthlyProductsSold[1], label: 'January' },
            { y: this.monthlyProductsSold[2], label: 'February' },
            { y: this.monthlyProductsSold[3], label: 'March' },
            { y: this.monthlyProductsSold[4], label: 'April' },
            { y: this.monthlyProductsSold[5], label: 'May' },
            { y: this.monthlyProductsSold[6], label: 'June' },
            { y: this.monthlyProductsSold[7], label: 'July' },
            { y: this.monthlyProductsSold[8], label: 'August' },
            { y: this.monthlyProductsSold[9], label: 'September' },
            { y: this.monthlyProductsSold[10], label: 'October' },
            { y: this.monthlyProductsSold[11], label: 'November' },
            { y: this.monthlyProductsSold[12], label: 'December' }
          ]
        }]
    }
    );

      chart.render();
        });

        }
}
