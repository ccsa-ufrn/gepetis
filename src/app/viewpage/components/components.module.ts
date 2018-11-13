import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { UtilsModule } from '../../utils/utils.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NewSubComponent } from './new-sub/new-sub.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewsComponent } from './news/news.component';
import { SubmissionsComponent } from './submissions/submissions.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [ComponentsComponent, HeaderComponent, CoverComponent, AboutComponent, EventsComponent,
      UserDashboardComponent, NewSubComponent, EditProfileComponent, NewsComponent,
      SubmissionsComponent],

  exports:[[ComponentsComponent, HeaderComponent, CoverComponent, AboutComponent, EventsComponent,
      UserDashboardComponent, NewSubComponent, EditProfileComponent, NewsComponent,
      SubmissionsComponent]]
})
export class ComponentsModule { }
