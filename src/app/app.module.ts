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
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PrintComponent } from './print/print.component';
import {CustomerOrderStatisticsComponent} from './customer-order-statistics/customer-order-statistics.component';
import {MonthsStatisticsComponent} from './months-statistics/months-statistics.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginSocialComponent } from './login-social/login-social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    OrdersComponent,
    CustomerDetailsComponent,
    JwPaginationComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    LoginComponent,
    PrintComponent,
    CustomerOrderStatisticsComponent,
    MonthsStatisticsComponent,
    LandingPageComponent,
    CallbackComponent,
    LoginSocialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot ({
      apiKey: 'AIzaSyBz3hjxGazfGmgWbxc2g7M342XMn5pTI4k'
    }),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
