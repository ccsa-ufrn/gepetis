import { Component, OnInit } from '@angular/core';

class Notice {
  Title:any;
  Data: any;
  important?:boolean;
  checked?:boolean;
}

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  News: Array<any> = [];
  Actioned = false;
  importantNotice = true;
  constructor() { }
  actionPage(){
    this.Actioned = true;
  }
  selectAll(){
    this.News.map(notice => {
      notice.checked =  true
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach =  notice.checked;
    }
      )

  }
  ngOnInit() {
    for(let i = 0 ; i< 5 ; i++){
      let aux = {
        Title : i,
        Data: '22/01/2019',
        important:false
      }
    if(i == 1){
      aux.important= true
    }
    this.News.push(aux);

    }
    console.log(this.News)
  }

}
