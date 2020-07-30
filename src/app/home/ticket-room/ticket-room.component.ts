import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import swal from 'sweetalert';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-ticket-room',
  templateUrl: './ticket-room.component.html',
  styleUrls: ['./ticket-room.component.scss']
})
export class TicketRoomComponent implements OnInit,OnDestroy {

  public maLichChieu:number = 0;
  public thongTinPhongVe:any = {};
  public dsGheDangDat :any [] = [];

  public subParam:Subscription;
  public subService:Subscription;

  constructor(private atv: ActivatedRoute, private filmService:QuanLyPhimService) { 
     //Lấy thông tin param từ url thông qua đối tượng atv
     this.subParam = this.atv.params.subscribe((params)=>{
      this.maLichChieu = params.maLichChieu;
      //Gọi service lấy thông tin phòng vé từ api 
      this.layThongTinPhongVe(this.maLichChieu);
    })
  }

  public layThongTinPhongVe(maLichChieu:number){
    this.subService =  this.filmService.LayChiTietPhongVe(maLichChieu).subscribe((res:any) => {
      console.log(res)
      this.thongTinPhongVe = res;

    },err => {console.log(err)})
  }
  ngOnInit(): void {
  
  }


    
  datGhe(gheDangDat:any){
    if(gheDangDat.dangDat){
      this.dsGheDangDat.push(gheDangDat);
    }else{
     this.dsGheDangDat =  this.dsGheDangDat.filter(gheDD => gheDD.maGhe !== gheDangDat.maGhe)
    }
  }
  datVe(){

    let userLogin: any = JSON.parse(localStorage.getItem('userLogin'));
    let objectDatVe = {
      "maLichChieu": this.maLichChieu,
      "danhSachVe": this.dsGheDangDat,
      "taiKhoanNguoiDung": userLogin.taiKhoan
    }
    // console.log(objectDatVe);

if(this.dsGheDangDat.length != 0){
  this.filmService.datVe(objectDatVe).subscribe((res:any)=>{
    swal({
      icon: "success",
       title: "ĐẶT VÉ THÀNH CÔNG",
    }).then(res=>{
     location.reload();
    });
  },err=>{
    swal({
      icon: "error",
       title: "ĐẶT VÉ THẤT BẠI",
    })
  })
}
swal({
      icon: "error",
       title: "VUI LÒNG CHỌN GHẾ",
    })
  }
  tinhTongTien(){
    return this.dsGheDangDat.reduce((tongTien,ghe,index)=>{
      return tongTien += Number(ghe.giaVe);
    },0)
  }
 ngOnDestroy(){
   if(this.subParam){
    this.subParam.unsubscribe();
   }
   if(this.subService){
    this.subService.unsubscribe();
   }
 }
}


