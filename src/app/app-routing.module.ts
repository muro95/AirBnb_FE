import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeDetailComponent} from './components/home-detail/home-detail.component';
import {HomeListForGuestComponent} from './components/home-list-for-guest/home-list-for-guest.component';
import {RegisterHostComponent} from './components/register-host/register-host.component';
import {AddHouseComponent} from './components/add-house/add-house.component';
import {UserBookingComponent} from './components/user-booking/user-booking.component';
import {ListHouseOfHostComponent} from './components/list-house-of-host/list-house-of-host.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register-host',
    component: RegisterHostComponent
  },
  {
    path: 'home/:houseId/:houseName',
    component: HomeDetailComponent
  },
  {
    path: 'home/:houseId/:houseName/booking',
    component: UserBookingComponent
  },
  {
    path: 'home/house-list-for-guest',
    component: HomeListForGuestComponent
  },
  {
    path: 'home/add-house',
    component: AddHouseComponent
  },
  {
    path: 'home/house-of-host',
    component: ListHouseOfHostComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
