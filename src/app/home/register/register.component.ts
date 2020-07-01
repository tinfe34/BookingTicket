import { Component, OnInit } from '@angular/core';
import { KhachHang } from 'src/app/_core/models/KhachHang';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private ngDungService: QuanLyNguoiDungService, private router: Router) { }

  ngOnInit(): void {
  }

  DangKy(value) {

    // Lấy đối tượng từ người dùng
    let obj: KhachHang = { ...value, maNhom: 'GP07', maLoaiNguoiDung: 'KhachHang' }

    //Dùng phương thức post đã định nghĩa ở  Services gửi lên server
    this.ngDungService.DangKy(obj).subscribe(
      (res) => {
        swal({
          icon: "success",
           title: "Đăng ký thành công",
        }).then(res => {
          if (res) {
            //Chuyển hướng đăng nhập
            this.router.navigate(['/login']);
          }
        });
      },
      (err) => {
        console.log(err);
      }

    )
  }
}
