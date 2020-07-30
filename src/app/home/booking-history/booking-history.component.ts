import { Component, OnInit } from '@angular/core';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  public hictory:any = [];
  constructor(private ngDungService: QuanLyNguoiDungService) {
    //Lấy userLogin từ localStogare đã đăng nhập và lưu trước đó
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    let obj: Object = {
      "taiKhoan": userLogin.taiKhoan,
    }

    this.ngDungService.Profile(obj).subscribe(
      (res: any) => {
        this.hictory = res;
        // console.log(res)
      }, (err) => {
        console.log(err)
      })
  }


  ngOnInit(): void {
  }

}
