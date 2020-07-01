import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { setting } from '../common/config/setting';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http:HttpClient) {}
//Lấy danh sách phim
  public LayDanhSachPhim():Observable<any[]>{
    let ob:any = this.http.get(`${setting.domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${setting.groupID}`) 

    return ob;
  }
  //Lấy thông tin hệ thống rạp
  public LayThongTinHeThongRap():Observable<any[]>{
    let ob:any = this.http.get(`${setting.domain}/QuanLyRap/LayThongTinHeThongRap`) 
    return ob;
  }

  //Lấy thông tin lich chiếu
  public LayThongTinLichChieu():Observable<any[]>{
    let ob:any = this.http.get(`${setting.domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${setting.groupID}`) 

    return ob;
  }
      //Lấy thông tin phim thông qua mã phim
  public LayThongTinPhim(maPhim:number):Observable<any>{
    let ob:any = this.http.get(`${setting.domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)

    return ob;
  }

    //Lấy chi tiết phòng vé thông qua mã lịch chiếu
    public LayChiTietPhongVe(maLichChieu:number):Observable<any[]> {
      let ob:any = this.http.get(`${setting.domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      return ob;
    }
    public datVe (thongTinDatVe:any):Observable<any[]>{
      let ob:any = this.http.post(`${setting.domain}/QuanLyDatVe/DatVe`,thongTinDatVe,{responseType:'text' });
      return ob;
  
  
  
    }

    
}
