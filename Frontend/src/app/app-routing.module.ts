import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { LoginComponent } from './components/main/login/login.component';
import { TestComponent } from './components/main/test/test.component';
import { PythontestComponent } from './components/main/pythontest/pythontest.component';
import { HomeComponent } from './components/main/home/home.component';
import { PythondbComponent } from './components/main/pythondb/pythondb.component';
import { TutorialsComponent } from './components/main/tutorials/tutorials.component';

const routes: Routes = [
  /* Routes */
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tutorials/:asignature/:idAsignature', component: TutorialsComponent },
  { path: 'test', component: TestComponent },
  { path: 'pythontest', component: PythontestComponent },
  { path: 'pythondb', component: PythondbComponent },
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
  TestComponent,
  PythontestComponent,
];
