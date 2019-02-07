import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {
  Actioned : boolean;
  Erease: boolean;
  Events: Array<any>=[]

  constructor() { }
  actionPage(){
    this.Actioned = true;
  }
  activeErease(){
    this.Erease = true
  }
  ngOnInit() {
    for(let i = 0 ; i< 5 ; i++){
      let aux = {
      name: 'Alvin Eos Esquilos',
      data: '10/08/2018'
      }
    if(i == 1){
      //aux.important= true
    }
    this.Events.push(aux);

    }
  }

}
