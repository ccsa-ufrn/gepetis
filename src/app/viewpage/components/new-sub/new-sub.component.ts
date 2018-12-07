import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-sub',
  templateUrl: './new-sub.component.html',
  styleUrls: ['./new-sub.component.css']
})
export class NewSubComponent implements OnInit {
 newSub: any;
  constructor(
    private fb: FormBuilder
  ) {
    this.newSub = this.fb.group({
      title:[''],
      theme:[''],
      authors:[''],
      file:[''],
    })
   }
  ngOnInit() {
  }

}
