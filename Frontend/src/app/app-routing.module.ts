import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { TutorialsComponent } from './components/main/tutorials/tutorials.component';
import { LoginComponent } from './components/main/login/login.component';
import { TestComponent } from './components/main/test/test.component';
import { PythontestComponent } from './components/main/pythontest/pythontest.component';
import { HomeComponent } from './components/main/home/home.component';

const routes: Routes = [
  /* Routes */
  { path: 'home', component: HomeComponent },
  { path: 'user', component: ProfileComponent },
  { path: 'home/tutorials', component: TutorialsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: 'pythontest', component: PythontestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  MainComponent,
  ProfileComponent,
  TutorialsComponent,
  LoginComponent,
  TestComponent,
  PythontestComponent,
];
