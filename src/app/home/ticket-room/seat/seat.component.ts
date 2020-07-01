import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
@Input() gheInput:any= {};
@Output() datGheOutPut = new EventEmitter();
dangDat:boolean = false;
sttArr:number  = 100;
  constructor() { }

  ngOnInit(): void {
  }
  datGhe() {
    this.dangDat = !this.dangDat;
  
    // tạo biến output cho mỗi lẫn người dùng click dat ghe
    let gheDangDat = {
      maGhe:this.gheInput.maGhe,
      giaVe:this.gheInput.giaVe,
      dangDat: this.dangDat,
      stt:this.gheInput.stt
    }
    console.log(gheDangDat)
    this.datGheOutPut.emit(gheDangDat);
    }

}
