import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm = this.fb.group({
    User:[''],
    firstName: [''],
    lastName: [''],
  });
  constructor(
   private fb: FormBuilder
  ) {
}


  ngOnInit() {
    console.log(this.profileForm)
  }

}
