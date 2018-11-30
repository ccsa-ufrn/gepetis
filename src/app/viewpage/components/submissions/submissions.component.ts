import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../../../_services'
declare var JSON: any;
@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  subs: any[];
  constructor(
    private SubmissionService: SubmissionService,
  ) { }

  ngOnInit() {
    this.SubmissionService.get()
    .subscribe((data:any[]) => {
       console.log(data),
      this.subs=data
    }
    )

  }

}
