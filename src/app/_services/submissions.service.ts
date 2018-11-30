import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Submission } from '../_models';

@Injectable(
  {providedIn:'root'}
)
export class SubmissionService {

   url:any;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:5000/api/others/submissions"
   }
  getById(){}
  get(){
    return this.http.get<Submission[]>(this.url);
  }
  set(){}
  update(){}
  delete(){}
}
