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
import { EditNewsComponent } from './edit-news/edit-news.component';
import { UniqueComponentsModule } from '../unique-components/unique-components.module'
@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    UniqueComponentsModule
  ],
  declarations: [EditAboutComponent, EditCoverComponent, EditEventsComponent, EditSubmissionsComponent, EditUsersComponent, UserActionComponent, EditOthersComponent, EditNewsComponent],
  exports:[EditAboutComponent, EditCoverComponent, EditEventsComponent, EditSubmissionsComponent, EditUsersComponent, UserActionComponent, EditOthersComponent, EditNewsComponent]
})
export class DashComponentsModule { }
