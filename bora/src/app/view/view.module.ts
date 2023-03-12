import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitalPageComponent } from './inital-page/inital-page.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';



@NgModule({
  declarations: [
    InitalPageComponent,
    InitialPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
