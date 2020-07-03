import { Component, OnInit, AfterViewInit } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
// import $ from 'jquery';
// declare var $:any;
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(){

  }

  
}
