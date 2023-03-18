import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterPictureComponent } from './register-picture/register-picture.component';



@NgModule({
  declarations: [
    InitialPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterPictureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
