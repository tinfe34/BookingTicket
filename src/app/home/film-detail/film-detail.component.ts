import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit,OnDestroy {

  public maPhim: number = 0;
  public phim:any = [];
  public subParam:Subscription;
  public subService:Subscription;

  //Sử dụng đối tượng activatedRoute để get params
  constructor(private avt: ActivatedRoute, private filmService:QuanLyPhimService) { 
    this.subParam = this.avt.params.subscribe(params=>{
      this.maPhim = params.maPhim;
      // console.log(this.maPhim);
      this.subService = this.filmService.LayThongTinPhim(this.maPhim).subscribe(result => {
          this.phim = result;
          console.log(result);
        }, error => { console.log(error) })
      
  })

  }

  ngOnInit( ): void {

    
  }
  toBy(){
    document.getElementById("pills-tab").scrollIntoView({behavior:"smooth"});
  }
ngOnDestroy(){
  if(this.subParam){
    this.subParam.unsubscribe();
  }
  if (this.subService) {
    this.subService.unsubscribe();
  }
}
}
