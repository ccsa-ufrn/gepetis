import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextService} from '../../../_services/text.service'
import { EventService } from '../../../_services/event.service'

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
    private TextService :TextService,
    private EventService :EventService
  ) {
    this.teste = new FormGroup({
      text: new FormControl(''),
    });
   }
  teste2( {event, editor }: any){
    this.teste.text= editor.getContent();
    console.log(this.teste.text);


  }
  getAbout(){
    this.EventService.get()
    .subscribe(
      res =>{
        this.textTo = res[0].about

      }
    )
  }
  ngAfterViewInit(){
    // this.textTo = this.TextService.getText();
    this.getAbout();
    console.log(this.textTo);

  }
  ngOnDestroy(){

  }


}
