import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './viewpage/index/index.component';

// VIEW PAGE COMPONENTS TO VIEW
import { AboutComponent } from './viewpage/components/about/about.component';
import { CoverComponent } from './viewpage/components/cover/cover.component';
import { EventsComponent } from './viewpage/components/events/events.component';
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
  path: '', component: IndexComponent, canActivate: [AuthGuard],
  children: [
    { path: '', component: CoverComponent },
    { path: 'sobre', component: AboutComponent},
    { path: 'cadastro', component: RegisterComponent },
    { path: 'events', component: EventsComponent }

  ]
},
{ path: 'login', component: LoginComponent },

{ path: 'painel', component: IndexDComponent,
children: [
  { path: '', component: CoverComponent },
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
