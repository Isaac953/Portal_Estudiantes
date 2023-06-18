import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { LoginComponent } from './components/main/login/login.component';
import { HomeComponent } from './components/main/home/home.component';
import { TutorialsComponent } from './components/main/tutorials/tutorials.component';
import { ContentComponent } from './components/main/content/content.component';
import { AboutComponent } from './components/main/about/about.component';

const routes: Routes = [
  /* Routes */
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'content/:asignature/:idAsignature', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tutorials/:asignature/:idAsignature/:idTeacher', component: TutorialsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  MainComponent,
  ProfileComponent,
  LoginComponent,
];
