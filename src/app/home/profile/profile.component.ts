import { Component, OnInit, ViewChild } from '@angular/core';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isDisabled:boolean = true;
  @ViewChild('frmUser') tagForm: NgForm;


  constructor(private ngDungService: QuanLyNguoiDungService) {
    //Lấy userLogin từ localStogare đã đăng nhập và lưu trước đó
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    let obj: any = {
      "taiKhoan": userLogin.taiKhoan,
    }
    // console.log(obj)
    this.ngDungService.Profile(obj).subscribe(
      (res: any) => {
        console.log(res)
        this.tagForm.setValue(res);
        
      }, (err) => {
        console.log(err)
      })
  }

  ngOnInit(): void {
   
  }
isEdit(){
  this.isDisabled = false;
}
profile(val){
  let obj ={...val,maLoaiNguoiDung:'KhachHang' }
  // console.log(obj)
this.ngDungService.UpdateProfile(obj).subscribe(
  (res: any) => {
    swal({
      icon: "success",
       title: "Cập nhật thành công",
    }).then(res=>{
      location.reload();
     });
     console.log(res)
  }, (err) => {
    console.log(err)
  })
}
}
