import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './view/chat/chat.component';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { FeedComponent } from './view/feed/feed.component';
import { LoginPageComponent } from './view/login-page/login-page.component';
import { RegisterEventComponent } from './view/register-event/register-event.component';
import { RegisterPictureComponent } from './view/register-picture/register-picture.component';
import { TalksComponent } from './view/talks/talks.component';
import { ViewComponent } from './view/view.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';

const routes: Routes = [{ 
  path: '', component: ViewComponent ,
},
{
  path: 'inicial', component: PaginaInicialComponent ,
},
{
  path: 'login', component: LoginPageComponent ,
},
{
  path: 'picture', component: RegisterPictureComponent ,
},
{
  path: 'evento', component: CadastroEventoComponent ,
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
{
  path: 'cadastro', component: CadastroComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
