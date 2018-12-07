import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm : any;
  constructor(
   private fb: FormBuilder
  ) {
   this.profileForm = this.fb.group({
      User:[''],
      Username:[''],
      password:[''],
      confirmPassword:[''],
      firstName: [''],
      midName: [''],
      lastName: [''],
      institution:[''],
      therm: [false],
    });

}


  ngOnInit() {
    //console.log(this.profileForm)
  }

  getTherm(){
    console.log(this.profileForm.value.therm)
  }
  validateRegister(){
    //if()
  }
  register(){
    //this.registerService.post(linkparameter, body);
  }
}
