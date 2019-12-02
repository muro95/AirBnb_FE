import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeDetailComponent} from './components/home-detail/home-detail.component';
import {HomeListForGuestComponent} from './components/home-list-for-guest/home-list-for-guest.component';


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
    path: 'home/:houseId/:houseName',
    component: HomeDetailComponent
  },
  {
    path: 'home/house-list-for-guest',
    component: HomeListForGuestComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
