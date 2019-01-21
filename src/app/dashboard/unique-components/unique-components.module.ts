import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { NewsSettingsComponent } from './news-settings/news-settings.component';
import { SubmissionsSettingsComponent } from './submissions-settings/submissions-settings.component';
import { NewNoticeComponent } from './new-notice/new-notice.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UtilsModule } from './../../Utils/utils.module';
import { NewEventComponent } from './new-event/new-event.component'
@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [UserSettingsComponent, NewsSettingsComponent, SubmissionsSettingsComponent,
     NewNoticeComponent, NewUserComponent, NewEventComponent],
  exports:[UserSettingsComponent, NewsSettingsComponent, SubmissionsSettingsComponent,
    NewNoticeComponent, NewUserComponent, NewEventComponent]
})
export class UniqueComponentsModule { }
