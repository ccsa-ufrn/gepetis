import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-submissions',
  templateUrl: './edit-submissions.component.html',
  styleUrls: ['./edit-submissions.component.css']
})
export class EditSubmissionsComponent implements OnInit {
  Submissions: Array<any> = [];
  Actioned= false;
  constructor() { }
  actionPage(){
    this.Actioned = true;
  }

  ngOnInit() {
    for(let i = 0 ; i< 5 ; i++){
      let aux = {
        id : i,
        Title : i,
        Authors: '22/01/2019',
        User:'Jose Wilder',
        Data: '29/03/1997'
      }
    this.Submissions.push(aux);

    }

  }

}
