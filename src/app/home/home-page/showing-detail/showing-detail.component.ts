import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-showing-detail',
  templateUrl: './showing-detail.component.html',
  styleUrls: ['./showing-detail.component.scss']
})
export class ShowingDetailComponent implements OnInit {

  rapPhim:any = [];
  lichChieu:any = [];
  constructor(private phimService:QuanLyPhimService) { }

  ngOnInit(): void {
    this.phimService.LayThongTinHeThongRap().subscribe(
      (result)=>{
        this.rapPhim = result;
        console.log(result)
      },
      (err)=>{
        console.log(err)
      }
    );
    this.phimService.LayThongTinLichChieu().subscribe(
      (result)=>{
        this.lichChieu = result;
        console.log(result)
      },
      (err)=>{
        console.log(err)
      })
  }
}
