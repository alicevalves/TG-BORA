import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './view/chat/chat.component';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { FeedComponent } from './view/feed/feed.component';
import { InitialPageComponent } from './view/initial-page/initial-page.component';
import { LoginPageComponent } from './view/login-page/login-page.component';
import { RegisterEventComponent } from './view/register-event/register-event.component';
import { RegisterPageComponent } from './view/register-page/register-page.component';
import { RegisterPictureComponent } from './view/register-picture/register-picture.component';
import { TalksComponent } from './view/talks/talks.component';
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
  path: 'feed', component: FeedComponent ,
},
{
  path: 'talks', component: TalksComponent ,
},
{
  path: 'chat', component: ChatComponent ,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
