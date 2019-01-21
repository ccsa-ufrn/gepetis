import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './viewpage/index/index.component';

// VIEW PAGE COMPONENTS TO VIEW
import { AboutComponent } from './viewpage/components/about/about.component';
import { CoverComponent } from './viewpage/components/cover/cover.component';
import { EventsComponent } from './viewpage/components/events/events.component';
import { NewsComponent } from './viewpage/components/news/news.component';

//----------------------


// DASHBOARD TO USER
import { UserDashboardComponent } from './viewpage/components/user-dashboard/user-dashboard.component';
import { NewSubComponent } from './viewpage/components/new-sub/new-sub.component';
import { EditProfileComponent } from './viewpage/components/edit-profile/edit-profile.component';
import { SubmissionsComponent } from './viewpage/components/submissions/submissions.component';


//----------------------

// DASHBOARD COMPONENTS TO VIEW
import { EditAboutComponent } from './dashboard/dash-components/edit-about/edit-about.component';
import { EditCoverComponent } from './dashboard/dash-components/edit-cover/edit-cover.component';
import { EditEventsComponent } from './dashboard/dash-components/edit-events/edit-events.component';
import { EditSubmissionsComponent } from './dashboard/dash-components/edit-submissions/edit-submissions.component';
import { EditUsersComponent } from './dashboard/dash-components/edit-users/edit-users.component';
import { EditOthersComponent } from './dashboard/dash-components/edit-others/edit-others.component';
import { EditNewsComponent } from './dashboard/dash-components/edit-news/edit-news.component';

import { UserSettingsComponent } from './dashboard/unique-components/user-settings/user-settings.component';
import { NewNoticeComponent } from './dashboard/unique-components/new-notice/new-notice.component';


//----------------------

import { IndexDComponent } from './dashboard/index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// import { LoginComponent } from './login';
// import { RegisterComponent } from './register';
import { AuthGuard } from './_guards/auth.guard';
//, canActivate: [AuthGuard]
const routes: Routes = [
{
  path: '', component: IndexComponent,
  children: [
    { path: '', component: CoverComponent },
    { path: 'sobre', component: AboutComponent},
    { path: 'cadastro', component: RegisterComponent },
    { path: 'events', component: EventsComponent },
    { path: 'noticias', component: NewsComponent },
    { path: 'user', component: UserDashboardComponent, canActivate: [], // need AuthGuard
      children:[
        { path: '', component: SubmissionsComponent },
        { path: 'editar-perfil', component: EditProfileComponent },
        { path: 'nova-submissao', component: NewSubComponent }
    ]},



  ]
},
{ path: 'login', component: LoginComponent },

{ path: 'painel', component: IndexDComponent,canActivate: [], // need AuthGuard
children: [
  { path: '', component: CoverComponent },
  { path: 'editar-submissoes', component: EditSubmissionsComponent},
  { path: 'editar-capa', component: EditCoverComponent },
  { path: 'editar-sobre', component: EditAboutComponent },
  { path: 'editar-eventos', component: EditEventsComponent,
  children:[
    { path: 'novo-evento', component: NewNoticeComponent },
    { path: 'editar-evento', component: NewNoticeComponent },
        
  ] },
  { path: 'editar-users', component: EditUsersComponent,
    children:[
  { path: 'editar:userId', component: UserSettingsComponent },
      
    ]},
  { path: 'outros', component: EditOthersComponent},
  { path: 'editar-noticias', component: EditNewsComponent,
  children:[
    { path: 'nova-noticia', component: NewNoticeComponent },
    { path: 'editar-noticia', component: NewNoticeComponent },
        
  ]},





]
 },


// { path: 'register', component:  },

// otherwise redirect to home
{ path: '**', redirectTo: '' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
