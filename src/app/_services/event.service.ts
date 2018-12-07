import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../_models/event';

@Injectable(
  {providedIn:'root'}
)
export class EventService {

   url:any;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:5000/api/others/events"
   }
  getById(){}
  get(){
    return this.http.get<Event>(this.url);
    //return this.http.get<Submission[]>(this.url);
  }
  update(){}
  delete(){}
  setAtual(){
    //set a event as atual to everyone
  }
  newEvent(){
    //make a new event post
  }
  getAtualEvent(){
  }
  getAbout(){

  }
}
