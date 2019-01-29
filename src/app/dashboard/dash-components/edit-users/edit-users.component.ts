import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  Actioned = false;
  Users: Array<any>= []

  constructor() { }
  editUser(){
    this.Actioned = true;
  }
  ngOnInit() {
    for(let i = 0 ; i< 5 ; i++){
      let aux = {
      name: 'Alvin Eos Esquilos'
      }
    if(i == 1){
      //aux.important= true
    }
    this.Users.push(aux);

    }
  }

}
