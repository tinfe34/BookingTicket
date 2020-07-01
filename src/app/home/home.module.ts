import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateComponent } from './home-template/home-template.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './home-page/slider/slider.component';
import { LoaiPhimComponent } from './home-page/loai-phim/loai-phim.component';
import { PhimSapChieuComponent } from './home-page/loai-phim/phim-sap-chieu/phim-sap-chieu.component';
import { PhimDangChieuComponent } from './home-page/loai-phim/phim-dang-chieu/phim-dang-chieu.component';
import { ItemPhimComponent } from './home-page/loai-phim/item-phim/item-phim.component';
import { TicketRoomComponent } from './ticket-room/ticket-room.component';
import { SeatComponent } from './ticket-room/seat/seat.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowingDetailComponent } from './home-page/showing-detail/showing-detail.component'; 
import { BookingHistoryComponent } from './booking-history/booking-history.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //import để sử dụng reactiveForm ngModel và validdation 

import { Routes, RouterModule } from '@angular/router';//import để sử dụng Routing
import { IsLoginGuard } from '../_core/guard/is-login.guard';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { PipesModule } from '../_core/pipes/pipes/pipes.module';
import { HomeAppComponent } from './home-page/home-app/home-app.component';

//pipes



const homeRoute: Routes = [
  {
    // HomeTemplateComponent mặc định hiễn thị ra từ router-outlet app.html
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent,canActivate:[IsLoginGuard] },
      { path: 'booking-hictory', component: BookingHistoryComponent,canActivate:[IsLoginGuard] },
      { path: 'detail-films/:maPhim', component: FilmDetailComponent },
    
    ]
  },
]

@NgModule({
  declarations: [HomeTemplateComponent,LoginComponent,RegisterComponent,HomePageComponent,SliderComponent, LoaiPhimComponent, PhimSapChieuComponent, PhimDangChieuComponent, ItemPhimComponent, TicketRoomComponent, SeatComponent, FilmDetailComponent, ProfileComponent, ShowingDetailComponent, BookingHistoryComponent, HomeAppComponent],
  imports: [
    CommonModule, RouterModule.forChild(homeRoute),FormsModule,ReactiveFormsModule,CarouselModule,PipesModule
  ]
})
export class HomeModule { }
