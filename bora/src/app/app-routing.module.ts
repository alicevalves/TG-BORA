import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { FeedComponent } from './view/feed/feed.component';
import { InitialPageComponent } from './view/initial-page/initial-page.component';
import { LoginPageComponent } from './view/login-page/login-page.component';
import { RegisterEventComponent } from './view/register-event/register-event.component';
import { RegisterFaceComponent } from './view/register-face/register-face.component';
import { RegisterPageComponent } from './view/register-page/register-page.component';
import { RegisterPictureComponent } from './view/register-picture/register-picture.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{ 
  path: '', component: ViewComponent ,
},
{
  path: 'initial', component: InitialPageComponent ,
},
{
  path: 'login', component: LoginPageComponent ,
},
{
  path: 'register', component: RegisterPageComponent ,
},
{
  path: 'picture', component: RegisterPictureComponent ,
},
{
  path: 'event', component: RegisterEventComponent ,
},
{
  path: 'profile', component: EditProfileComponent ,
},
{
  path: 'face', component: RegisterFaceComponent ,
},
{
  path: 'feed', component: FeedComponent ,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
