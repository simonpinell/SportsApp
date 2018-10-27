import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';

import { ExercisesComponent } from './exercises/exercises.component'; 
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { PlansComponent } from './plans/plans.component'; 
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'detail/:id', component: ExerciseDetailComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
