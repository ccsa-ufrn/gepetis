import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
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
export class EditNewsComponent implements AfterViewInit {
  
  News: Array<any> = [];
  Actioned = false;
  Erease = false;
  importantNotice = true;
  constructor( private http: HttpClient, private route: ActivatedRoute) { }
  actionPage(){
    this.Actioned = true;
  }
  selectAll(){
    let checkboxes =document.querySelectorAll('input');
    for (let e=0;e<checkboxes.length;e++) {
      checkboxes[e].checked = true
    }
      this.Erease = true;
  }
  unselectAll(){
    let checkboxes =document.querySelectorAll('input');
    for (let e=0;e<checkboxes.length;e++) {
      checkboxes[e].checked = false
    }
      this.Erease = false;
  }
  exception(){
    this.route.params.subscribe(params => {console.log(params);});
    this.route.queryParams.subscribe(qParams => {console.log(qParams);});
  }
  ngAfterViewInit() {
    this.exception()
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
