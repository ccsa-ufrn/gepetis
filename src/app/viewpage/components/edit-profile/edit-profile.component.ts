import { Component, OnInit } from '@angular/core';
import { UtilsModule } from '../../../utils/utils.module'
import { FormBuilder, FormGroup } from '@angular/forms'; // to use in forms

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileEdited: any;
  constructor(
    private fb: FormBuilder
  ) {
    this.profileEdited = this.fb.group({
      Username:[''],
      Password:[''],
      firstName:[''],
      midName:[''],
      lastName:[''],
    })

  }

  ngOnInit() {
  }

}
