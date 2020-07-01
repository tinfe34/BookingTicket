// app-routing cấu hình routing rồi import ra app-module dùng thui nè!!

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { TicketRoomComponent } from './home/ticket-room/ticket-room.component';
import { IsLoginGuard } from './_core/guard/is-login.guard';

//Định nghĩa phần nội dung  khi người  gõ url => load ra component tại thẻ <router-outlet>
const appRoutes:Routes = [
  {path:'home',loadChildren:()=> HomeModule},
  {path:'admin',loadChildren: ()=>AdminModule},
  {path:'',loadChildren:()=> HomeModule},
  { path: 'ticketRoom/:maLichChieu', component: TicketRoomComponent,canActivate:[IsLoginGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

