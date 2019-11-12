import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AgmCoreModule } from '@agm/core';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    OrdersComponent,
    CustomerDetailsComponent,
    JwPaginationComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot ({
      apiKey: 'AIzaSyBKmma20Z9FmYakWYQ8G_WMvvNY8YXilNE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
