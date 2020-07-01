import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  public maPhim: number = 0;
  public phim:any = [];

  //Sử dụng đối tượng activatedRoute để get params
  constructor(private avt: ActivatedRoute, private filmService:QuanLyPhimService) { 
    this.avt.params.subscribe(params=>{
      this.maPhim = params.maPhim;

        this.filmService.LayThongTinPhim(this.maPhim).subscribe(result => {
          this.phim = result;

        }, error => { console.log(error) })
      
  })

  }

  ngOnInit( ): void {

    
  }
  toBy(){
    document.getElementById("pills-tab").scrollIntoView({behavior:"smooth"});
  }

}
