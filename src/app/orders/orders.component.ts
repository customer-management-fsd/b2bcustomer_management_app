import { Component, OnInit } from '@angular/core';
import {CustomersServices} from '../services/customers-services.service';
import { ICustomer } from '../modal/customer';
import {IOrders} from '../modal/orders';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customers:ICustomer[];
  
  IndividualOrdersTotal = [];
  singleCustomer:ICustomer
  id:number
  constructor(private _customerService:CustomersServices,private _route: ActivatedRoute) { }
 

  ngOnInit(){
    this.id = +this._route.snapshot.paramMap.get('id');
    

    if(this.id==0){

      this._customerService.getCustomers()
    .subscribe((customers:ICustomer[])=>{
      this.customers = customers;
      this.customers.forEach((customer)=>{
        var sum = 0;
        for(let order of customer["orders"]){
             sum+=order["price"];
          }
          
          this.IndividualOrdersTotal.push(sum);
       
      })
        
      })

    }

    else{
       this.id = +this._route.snapshot.paramMap.get('id');
    this._customerService.getCustomerById(this.id).subscribe(singleCustomer => {this.singleCustomer = singleCustomer;
      var sum = 0;
      for(let order of singleCustomer["orders"]){
           sum+=order["price"];
        }
        
        this.IndividualOrdersTotal.push(sum);
    });

  
    }
    
      
    }
    


 

}
