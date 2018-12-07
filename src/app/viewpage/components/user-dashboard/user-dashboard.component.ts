import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // to use in forms

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  path: any;
  passwordChange: any;
  constructor(
    private fb: FormBuilder
  ) {
    this.passwordChange = this.fb.group({
      password:[''],
      newPassword:['']
    })
   }

  ngOnInit() {

  }
  change(){
    console.log("Senha Alterada com Sucesso!")
  }
  logout(){
    localStorage.removeItem('currentUser');
    window.location.reload(true);
  }
  // window.onbeforeunload = function() {
  //   localStorage.removeItem(key);
  //   return '';
  // };
}
