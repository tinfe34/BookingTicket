import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
// import $ from 'jquery';
// declare var $:any;
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit,OnDestroy {

  public mangPhim:Object[] = [];
  public subService:Subscription;

  constructor(private phimService:QuanLyPhimService) { }

  ngOnInit(): void {
  
    this.subService = this.phimService.LayDanhSachPhim().subscribe(
      (result)=>{
       this.mangPhim = result;
          // console.log(result)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  ngOnDestroy(): void {
    if(this.subService){
      this.subService.unsubscribe();
      // console.log(this.subService)
    }
    
  }
}
