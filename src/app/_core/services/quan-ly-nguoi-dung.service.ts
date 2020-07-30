import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserLogin} from '../models/userLogin'
import { KhachHang } from '../models/KhachHang';
import { setting } from '../common/config/setting';

@Injectable({
  providedIn: 'root'
})
export class QuanLyNguoiDungService {
  constructor(private http: HttpClient) { }

  public DangNhap(userLogin:UserLogin): Observable<any[]> {
    //Thực hiện giao thức post bên angular
    let header: HttpHeaders = new HttpHeaders();
    //Định nghĩa dữ liệu người dùng gửi đi là json object,server sẽ trả về obj kèm token
    header.append('Content-Type', 'application/json');
    let ob: any = this.http.post(`${setting.domain}/QuanLyNguoiDung/DangNhap`, userLogin, { headers: header, responseType: 'json' })
    return ob;
  }

  public DangKy(kh:KhachHang): Observable<any[]> {
    //Thực hiện giao thức post bên angular
    let header: HttpHeaders = new HttpHeaders();
    //Định nghĩa dữ liệu người dùng gửi đi là json object, server sẽ không trả gì về
    header.append('Content-Type', 'application/json');
    let ob: any = this.http.post(`${setting.domain}/QuanLyNguoiDung/DangKy`, kh, { headers: header, responseType: 'json' })
    return ob;
  }
  
  public Profile(taiKhoan:any): Observable<any[]> {
    //Thực hiện giao thức post bên angular
    let header: HttpHeaders = new HttpHeaders();
    //Định nghĩa dữ liệu người dùng gửi đi là json object,server sẽ trả về obj kèm token
    header.append('Content-Type', 'application/json');
    let ob: any = this.http.post(`${setting.domain}/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan, { headers: header, responseType: 'json' })
    return ob;
  }
  public UpdateProfile(obj:any): Observable<any[]> {
    //Thực hiện giao thức post bên angular
    let header: HttpHeaders = new HttpHeaders();
    //Định nghĩa dữ liệu người dùng gửi đi là json object,server sẽ trả về obj kèm token
    header.append('Content-Type', 'application/json');
    let ob: any = this.http.put(`${setting.domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, obj, { headers: header, responseType: 'json' })
    return ob;
  }
}
