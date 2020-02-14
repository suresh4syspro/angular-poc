import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TrackingComponent } from 'src/app/tracking/tracking.component';
import { TrackingListComponent } from 'src/app/tracking-list/tracking-list.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'task-tracking', component: TrackingComponent },
  { path: 'tracking-list', component: TrackingListComponent },
  { path: 'home', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
