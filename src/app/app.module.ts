

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cấu hình header với token ở phần ticket room
import { AuthInterceptor } from './_core/guard/jwt.interceptor';
import { RouteEventsService } from './_core/services/route-events.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //App-routing cấu hình xong import vào đây
    HttpClientModule, // dùng để giao tiếp với các phương thức http sercices
    BrowserAnimationsModule // dùng cho thư viện owl carousel
  ],
  providers: [
    //Cấu hình provide ở phần ticket room
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    RouteEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
