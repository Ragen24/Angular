import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {BookMenuComponent} from './book-menu/book-menu.component';
import {OrderMenuComponent} from './order-menu/order-menu.component';
import {RequestMenuComponent} from './request-menu/request-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-menu', pathMatch: 'full'},
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'book-menu', component: BookMenuComponent },
  { path: 'order-menu', component: OrderMenuComponent },
  { path: 'request-menu', component: RequestMenuComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
