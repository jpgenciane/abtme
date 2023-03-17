import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPipe } from './pages/login.pipe';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPipe,
    LoginComponent,
    SignupComponent,
    SignupFormComponent,
    DashboardComponent,
    NavComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
