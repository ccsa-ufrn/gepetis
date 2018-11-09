import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextService} from '../../../_services/text.service'

declare var tinymce:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements  AfterViewInit {
  teste : any;
  textTo:any;

  // @Input() elementId:string;
  // @Output() onEditorKeyUp: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    private TextService :TextService
  ) {
    this.teste = new FormGroup({
      text: new FormControl(''),
    });
   }
  teste2( {event, editor }: any){
    this.teste.text= editor.getContent();
    console.log(this.teste.text);


  }

  ngAfterViewInit(){
    this.textTo = this.TextService.getText();
    console.log(this.textTo);

  }
  ngOnDestroy(){

  }


}
