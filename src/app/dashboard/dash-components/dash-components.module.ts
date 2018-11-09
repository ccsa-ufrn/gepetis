import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { EditCoverComponent } from './edit-cover/edit-cover.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { EditSubmissionsComponent } from './edit-submissions/edit-submissions.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { UtilsModule } from '../../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [EditAboutComponent, EditCoverComponent, EditEventsComponent, EditSubmissionsComponent, EditUsersComponent],
  exports:[EditAboutComponent]
})
export class DashComponentsModule { }
