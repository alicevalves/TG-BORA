import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

const routes: Routes = [{ path: '', component: ViewComponent ,
children: [
{
  path: 'initial',
  component: InitialPageComponent
}

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
