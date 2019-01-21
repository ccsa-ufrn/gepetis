import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  Actioned = false;
  constructor() { }
  actionPage(){
    this.Actioned = true;
  }
  ngOnInit() {
  }

}
