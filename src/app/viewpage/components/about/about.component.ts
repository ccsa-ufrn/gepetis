import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

declare var tinymce:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements  AfterViewInit {
  teste : any;

  @Input() elementId:string;
  @Output() onEditorKeyUp: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
    this.teste = new FormGroup({
      text: new FormControl(''),
    });
   }
  teste2( {event, editor }: any){
    this.teste.text= editor.getContent();
    console.log(this.teste.text);

  }
  editor;
  ngAfterViewInit(){

  }
  ngOnDestroy(){

  }


}
