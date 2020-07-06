import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';
import { Routes, RouterModule } from '@angular/router';



const adminRoute: Routes = [
  {
 
    path: '', component: AdminLayoutComponent, children: [
      { path: '', component: AdminLayoutComponent },
    ]
  },
]

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,RouterModule.forChild(adminRoute)
  ]
})
export class AdminModule { }
