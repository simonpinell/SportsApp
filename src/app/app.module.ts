import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { AccountComponent } from './account/account.component';
import { PlansComponent } from './plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    MessagesComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ExerciseDetailComponent,
    AccountComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
    // no need to place any providers due to the `providedIn` flag...
  bootstrap: [AppComponent]
})
export class AppModule { }
