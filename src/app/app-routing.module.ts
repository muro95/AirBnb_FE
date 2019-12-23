import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/user/register-user/register.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeDetailComponent} from './components/home-detail/home-detail.component';
import {HomeListForGuestComponent} from './components/user/home-list-for-guest/home-list-for-guest.component';
import {RegisterHostComponent} from './components/host/register-host/register-host.component';
import {AddHouseComponent} from './components/host/add-house/add-house.component';
import {UserBookingComponent} from './components/user/user-booking/user-booking.component';
import {ListHouseOfHostComponent} from './components/host/list-house-of-host/list-house-of-host.component';
import {ListOrderOfUserComponent} from './components/user/list-order-of-user/list-order-of-user.component';
import {CategoryHouse} from './components/category-house/data-category/categoryHouse';
import {CategoryHouseComponent} from './components/category-house/category-house.component';
import {CancelOrderComponent} from './components/user/list-order-of-user/cancel-order/cancel-order.component';
import {DeleteHouseComponent} from './components/host/delete-house/delete-house.component';
import {EditHouseComponent} from './components/host/edit-house/edit-house.component';
import {ListOrderComponent} from './components/host/list-order/list-order.component';


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
  },
  {
    path: 'home/house-of-host/:houseId/edit',
    component: EditHouseComponent
  },
  {
    path: 'home/house-of-host/delete/:houseId',
    component: DeleteHouseComponent
  },
  {
    path: 'home/list-order-of-user',
    component: ListOrderOfUserComponent
  },
  {
    path: 'home/category-list',
    component: CategoryHouseComponent
  },
  {
    path: 'home/order-list-of-user',
    component: ListOrderOfUserComponent
  },
  {
    path: 'home/list-order-of-user/cancel/:id',
    component: CancelOrderComponent
  },
  {
    path: 'home/list-order-of-guest-each-house',
    component: ListOrderComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
