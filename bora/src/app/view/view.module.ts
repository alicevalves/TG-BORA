import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitalPageComponent } from './inital-page/inital-page.component';
import { InitialPageComponent } from './initial-page/initial-page.component';



@NgModule({
  declarations: [
    InitalPageComponent,
    InitialPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
