import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent} from './components/sign-in/sign-in.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
import { WelcomeComponent} from './components/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes =[
  { path:'',redirectTo:'/sign-in' , pathMatch:'full'},
  { path : 'sign-in' , component : SignInComponent},
  { path : 'sign-up' , component : SignUpComponent},
  {path: 'welcome', component : WelcomeComponent}];
@NgModule({

  imports: [
  RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
