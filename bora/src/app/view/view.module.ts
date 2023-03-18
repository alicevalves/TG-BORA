import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterPictureComponent } from './register-picture/register-picture.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegisterFaceComponent } from './register-face/register-face.component';



@NgModule({
  declarations: [
    InitialPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterPictureComponent,
    RegisterEventComponent,
    EditProfileComponent,
    RegisterFaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
