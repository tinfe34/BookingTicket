import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-ticket-room',
  templateUrl: './ticket-room.component.html',
  styleUrls: ['./ticket-room.component.scss']
})
export class TicketRoomComponent implements OnInit {

  public maLichChieu:number = 0;
  public thongTinPhongVe:any = {};
  public dsGheDangDat :any [] = [];


  constructor(private atv: ActivatedRoute, private filmService:QuanLyPhimService) { 
     //Lấy thông tin param từ url thông qua đối tượng atv
     this.atv.params.subscribe((params)=>{
      this.maLichChieu = params.maLichChieu;
      //Gọi service lấy thông tin phòng vé từ api 
      this.layThongTinPhongVe(this.maLichChieu);
    })
  }

  public layThongTinPhongVe(maLichChieu:number){
    this.filmService.LayChiTietPhongVe(maLichChieu).subscribe((res:any) => {
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
    console.log(objectDatVe);

if(this.dsGheDangDat.length != 0){
  this.filmService.datVe(objectDatVe).subscribe((res:any)=>{
    swal({
      icon: "success",
       title: "Dat ve thanh cong",
    }).then(res=>{
      location.reload();
    });
  },err=>{
    swal({
      icon: "error",
       title: "dat ve that bai",
    })
  })
}
swal({
      icon: "error",
       title: "Vui long chon ghe",
    })
  }
  tinhTongTien(){
    return this.dsGheDangDat.reduce((tongTien,ghe,index)=>{
      return tongTien += Number(ghe.giaVe);
    },0)
  }

}


