import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/_core/models/userLogin';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';
import { setting } from 'src/app/_core/common/config/setting';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public TaiKhoanKhongHopLe: Array<string> = ['tinxautrai', 'tinxauxi']; //Mãng dùng cho validation 

  public formDangNhap: FormGroup; //Khởi tạo react form kiểu dữ liệu FormGroup

  constructor(private ngDungService: QuanLyNguoiDungService, private router: Router) {

  }

  // Khởi tạo đối tượng reactiveForm đê lấy  dữ liệu, dữ liệu ban đầu null
  ngOnInit(): void {
    this.formDangNhap = new FormGroup({
      'taiKhoan': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), this.checkKhongHopLe.bind(this)]),
      'matKhau': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })


  }

  login() {
    if (this.formDangNhap.valid) {

      this.ngDungService.DangNhap(this.formDangNhap.value).subscribe(
        (res:any) => {
          // nếu đăng nhập thành công sẽ trả về
            localStorage.setItem(setting.userLogin, JSON.stringify(res)); // lưu vào local
            localStorage.setItem(setting.accessToken, JSON.stringify(res.accessToken));

            swal({
              icon: "success",
               title: "Đăng nhập thành công",
            });
                //Chuyển hướng đăng nhập
                this.router.navigate(['/home']);

        }, (err) => {
          swal({
            icon: "error",
             title: "Tài khoản hoặc mật khẩu không hợp lệ",
          })
        })
    }

  }


  //Validation tự làm
  checkKhongHopLe(control: FormControl) {
    for (let taiKhoan of this.TaiKhoanKhongHopLe) {
      if (control.value === taiKhoan) {
        return { 'KhongHopLe': true }
      }
    }
    return null;
  }
}

