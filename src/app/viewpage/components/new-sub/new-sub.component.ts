import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
declare var json : any;
@Component({
  selector: 'app-new-sub',
  templateUrl: './new-sub.component.html',
  styleUrls: ['./new-sub.component.css']
})
export class NewSubComponent implements OnInit {
 newSub: any;
 fileTopUpload : any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
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
  fileUpload(event: any){
    //  console.log(event.target.files[0]);
     const formData : any = new FormData();
     this.fileTopUpload = event.target.files[0];
     formData.append('article', this.fileTopUpload);
     this.http.post('http://localhost:5000/api/archive/file', formData)
      .subscribe(files => console.log('file was successfuly uploaded'))
  }

}
