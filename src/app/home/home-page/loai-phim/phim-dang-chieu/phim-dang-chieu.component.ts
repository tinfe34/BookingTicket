import { Component, OnInit, AfterViewInit } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
// import $ from 'jquery';
// declare var $:any;
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {

  mangPhim:any[] = [];
  constructor(private phimService:QuanLyPhimService) { }

  ngOnInit(): void {
  
    this.phimService.LayDanhSachPhim().subscribe(
      (result)=>{
       this.mangPhim = result;
          console.log(result)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  
}
