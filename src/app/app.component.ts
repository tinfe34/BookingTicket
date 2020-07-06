import { Component } from '@angular/core';
import { RouteEventsService } from './_core/services/route-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookingticket';
  constructor( private routeEventsService: RouteEventsService){

  }
}
