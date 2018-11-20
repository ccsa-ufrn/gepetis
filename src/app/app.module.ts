import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';

//utils
// import { fakeBackendProvider } from './_helpers/fake-backend';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
// import{ ErrorInterceptor } from './_helpers/error-interceptor';
import { AuthenticationService }from './_services/authentication.service';
import { UserService }from './_services/user.service';
//----

import { ViewpageModule } from './viewpage/viewpage.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { ComponentsModule } from './viewpage/components/components.module'

import { UtilsModule} from './utils/utils.module'



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewpageModule,
    DashboardModule,
    ComponentsModule,
    ReactiveFormsModule,
    UtilsModule
  ],
  providers: [
    AuthGuard,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
