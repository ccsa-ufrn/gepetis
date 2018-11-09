import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {providedIn:'root'}
)
export class TextService {
  fakebd:any;
  setText(value:any){
    this.fakebd = value;
    console.log(this.fakebd);

  }
  getText():any{
    return this.fakebd;

  }
}
