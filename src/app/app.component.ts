import { Component } from '@angular/core';
import { EventService} from './_services/event.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private Event : EventService
  ){
    //this.Event.getAtualEvent();

  }
  title = 'gepetis-att';
}
