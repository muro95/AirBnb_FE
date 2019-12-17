import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/user/register-user/register.component';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {HttpClientModule} from '@angular/common/http';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import {HomeListForGuestComponent} from './components/user/home-list-for-guest/home-list-for-guest.component';

import { RegisterHostComponent } from './components/host/register-host/register-host.component';
import {AddHouseComponent} from './components/host/add-house/add-house.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {OrderModule} from 'ngx-order-pipe';
import { UserBookingComponent } from './components/user/user-booking/user-booking.component';
import { ListHouseOfHostComponent } from './components/host/list-house-of-host/list-house-of-host.component';
import { ListOrderOfUserComponent } from './components/user/list-order-of-user/list-order-of-user.component';
import { CategoryHouseComponent } from './components/category-house/category-house.component';
import { CancelOrderComponent } from './components/user/list-order-of-user/cancel-order/cancel-order.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';

// npm install --save @angular/material @angular/cdk @angular/animations


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeDetailComponent,
    HomeListForGuestComponent,
    RegisterHostComponent,
    AddHouseComponent,
    FooterComponent,
    HeaderComponent,
    UserBookingComponent,
    ListHouseOfHostComponent,
    ListOrderOfUserComponent,
    CategoryHouseComponent,
    CancelOrderComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    OrderModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
