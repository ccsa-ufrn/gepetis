import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { EditCoverComponent } from './edit-cover/edit-cover.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { EditSubmissionsComponent } from './edit-submissions/edit-submissions.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { UtilsModule } from '../../utils/utils.module';
import { UserActionComponent } from './user-action/user-action.component';
import { EditOthersComponent } from './edit-others/edit-others.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [EditAboutComponent, EditCoverComponent, EditEventsComponent, EditSubmissionsComponent, EditUsersComponent, UserActionComponent, EditOthersComponent],
  exports:[EditAboutComponent]
})
export class DashComponentsModule { }
