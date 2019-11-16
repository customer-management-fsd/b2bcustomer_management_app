import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';
import { PrintComponent } from './print/print.component';
import { LoginguardService } from './guard/loginguard.service';
import {CustomerOrderStatisticsComponent} from './customer-order-statistics/customer-order-statistics.component';
import {MonthsStatisticsComponent} from './months-statistics/months-statistics.component';

const routes: Routes = [
  {path: 'customers', component: CustomerComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'orders/:id', component: OrdersComponent},
  {path: 'newCustomer', canActivate: [LoginguardService] , component: CustomerCreateComponent},
  {path: 'customers/:id/edit', canActivate: [LoginguardService] , component: CustomerEditComponent},
  {path: '', component: CustomerComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'print', component: PrintComponent},
  {path: 'statistics', component: CustomerOrderStatisticsComponent},
  {path: 'monthlystatistics', component: MonthsStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
