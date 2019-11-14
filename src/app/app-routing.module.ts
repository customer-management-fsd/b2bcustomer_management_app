import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerOrderStatisticsComponent } from './customer-order-statistics/customer-order-statistics.component';
import { MonthsStatisticsComponent } from './months-statistics/months-statistics.component';


const routes: Routes = [
  {path: 'customers', component: CustomerComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: '', component: CustomerComponent},
  {path: 'newcustomer', component: CustomerCreateComponent},
   { path: 'customers/:id/edit', component: CustomerEditComponent},
   {path: 'statistics', component: CustomerOrderStatisticsComponent},
   {path: 'months', component: MonthsStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
