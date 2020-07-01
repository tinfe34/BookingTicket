import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit,AfterViewInit {
 @Input()phimItem;
 
  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
    $.modal.defaults = {
      showClose: true,
      fadeDuration: 500,
 
    };
  }
 
}
