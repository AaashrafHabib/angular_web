import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddConsultantComponent } from './components/add-consultant/add-consultant.component';
import { AddAdministrateurComponent } from './components/add-administrateur/add-administrateur.component';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HomeConsultantComponent } from './components/home-consultant/home-consultant.component';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'addClient',
    component: AddClientComponent
  },
  {
    path: 'addAdmin',
    component: AddAdministrateurComponent
  },
  {
    path: 'addConsultant',
    component: AddConsultantComponent
  },
  {
    path: 'homeClient',
    component: HomeClientComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'homeConsultant',
    component: HomeConsultantComponent
  },
  {
    path: 'homeadmin',
    component: HomeComponent,
    //canActivate: [authGuard]
  }, 
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
