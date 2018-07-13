import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BookMenuComponent } from './book-menu/book-menu.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { RequestMenuComponent } from './request-menu/request-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    BookMenuComponent,
    OrderMenuComponent,
    RequestMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
