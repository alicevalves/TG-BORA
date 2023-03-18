import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './view/initial-page/initial-page.component';
import { LoginPageComponent } from './view/login-page/login-page.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
