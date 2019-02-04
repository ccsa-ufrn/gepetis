import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { NewsSettingsComponent } from './news-settings/news-settings.component';
import { SubmissionsSettingsComponent } from './submissions-settings/submissions-settings.component';
import { NewNoticeComponent } from './new-notice/new-notice.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UtilsModule } from './../../utils/utils.module';
import { NewEventComponent } from './new-event/new-event.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SubmissionsDetailsComponent } from './submissions-details/submissions-details.component';
@NgModule({
  imports: [
    CommonModule,
    UtilsModule

  ],
  declarations: [UserSettingsComponent, NewsSettingsComponent, SubmissionsSettingsComponent,
     NewNoticeComponent, NewUserComponent, NewEventComponent, EditUserComponent,
     ViewUserComponent, SubmissionsDetailsComponent],
  exports:[UserSettingsComponent, NewsSettingsComponent, SubmissionsSettingsComponent,
     NewNoticeComponent, NewUserComponent, NewEventComponent, EditUserComponent,
     ViewUserComponent, SubmissionsDetailsComponent]
})
export class UniqueComponentsModule { }
