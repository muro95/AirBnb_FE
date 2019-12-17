import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { PmComponent } from './components/pm/pm.component';
import { AdminComponent } from './components/admin/admin.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {HttpClientModule} from '@angular/common/http';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import {HomeListForGuestComponent} from './components/home-list-for-guest/home-list-for-guest.component';

import { RegisterHostComponent } from './components/register-host/register-host.component';
import {AddHouseComponent} from './components/add-house/add-house.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {OrderModule} from 'ngx-order-pipe';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';




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
    UserComponent,
    PmComponent,
    AdminComponent,
    HomeDetailComponent,
    HomeListForGuestComponent,
    RegisterHostComponent,
    AddHouseComponent,
    FooterComponent,
    HeaderComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
