import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
class Notice {
  id:any
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
  clicked(){
    this.Erease = true;
  }
  selectAll(){
    let checkboxes =document.querySelectorAll('input');
    for (let e=0;e<checkboxes.length;e++) {
      checkboxes[e].checked = true;
      this.News[e].checked= true;
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
  removeNotice(){
    this.News.map( notice => {
      if(notice.checked){
        this.News.slice(notice.id,1)
        console.log('removido: '+ notice.id)

      }
    })

  }
  ngAfterViewInit() {
    this.exception()
    for(let i = 0 ; i< 5 ; i++){
      let aux = {
        id : i,
        Title : i,
        Data: '22/01/2019',
        important:false,
        checked: false
      }
    if(i == 1){
      aux.important= true
    }
    this.News.push(aux);

    }
    console.log(this.News)
  }

}
