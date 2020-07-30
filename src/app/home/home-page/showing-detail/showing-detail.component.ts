import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-showing-detail',
  templateUrl: './showing-detail.component.html',
  styleUrls: ['./showing-detail.component.scss']
})
export class ShowingDetailComponent implements OnInit,OnDestroy {

  public rapPhim:Array<Object> = [];
  public lichChieu:Object[] = [];
  public subServiceHTR:Subscription;
  public subServiceLC:Subscription;
  
  constructor(private phimService:QuanLyPhimService) { }

  ngOnInit(): void {
   this.subServiceHTR = this.phimService.LayThongTinHeThongRap().subscribe(
      (result)=>{
        this.rapPhim = result;
        console.log(result)
      },
      (err)=>{
        console.log(err)
      }
    );
   this.subServiceLC = this.phimService.LayThongTinLichChieu().subscribe(
      (result)=>{
        this.lichChieu = result;
        // console.log(result)
      },
      (err)=>{
        console.log(err)
      })
      // console.log(this.subServiceHTR)
      // console.log(this.subServiceLC)

  }

  ngOnDestroy(): void {
    if(this.subServiceHTR){
      this.subServiceHTR.unsubscribe();
      // console.log(this.subServiceHTR)
    }
    if( this.subServiceLC ){
    this.subServiceLC.unsubscribe();
    // console.log(this.subServiceLC)
    }
  }
}
