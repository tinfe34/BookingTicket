import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit {
  public userLogin: any;
  public status: boolean; //check xem trong localStogare có gì hay chưa

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    //Lấy userLogin từ localStogare đã đăng nhập và lưu trước đó
    this.userLogin = JSON.parse(localStorage.getItem('userLogin'));

    // Điều kiện hiển thị div   
    if (this.userLogin == null) {
      this.status = true; 
    }

  }

  DangXuat() {

    swal({
      title: "Bạn có chắc muốn đăng xuất không?",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
    }).then(
      // result trả về giá trị true hoặc false
      (result) => {
        if (result) {
          //tiến hành xóa localStogare
          localStorage.removeItem('userLogin');
          localStorage.removeItem('accessToken');
          swal({
            icon: "success",
             title: "Đăng xuất thành công",
          })
         //load lai trang
         location.reload();

        }
      })
    
  }
}
