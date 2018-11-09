import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextService} from '../../../_services/text.service'

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  AboutText : any;

    constructor(
      private TextService :TextService
    ) {
      this.AboutText = new FormGroup({
        text: new FormControl(''),
      });
     }
    setText( {event, editor }: any){
      this.AboutText.text= editor.getContent();
      this.TextService.setText(this.AboutText.text);

      console.log(this.AboutText.text);

    }

  ngOnInit() {
  }

}
