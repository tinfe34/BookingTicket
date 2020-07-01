import { Component, OnInit } from '@angular/core';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public objUser:any;
  constructor(private ngDungService: QuanLyNguoiDungService) {
    //Lấy userLogin từ localStogare đã đăng nhập và lưu trước đó
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    let obj: any = {
      "taiKhoan": userLogin.taiKhoan,
    }
    console.log(obj)
    this.ngDungService.Profile(obj).subscribe(
      (res: any) => {
        this.objUser =res;
        console.log(res)
      }, (err) => {
        console.log(err)
      })
  }

  ngOnInit(): void {

  }

}
