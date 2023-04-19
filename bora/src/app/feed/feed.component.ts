import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from './feed.service';
import { FeedResponse } from './feed';
import { BaseBoraComponent } from '../shared/components/base-bora/base-bora.component';
import { LoginComponent } from '../login/login.component';
import { BoraStore } from '../store/bora.store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent  {

  mostrarPerfil:boolean = false;
  eventos: any
  idUsuario: any

  constructor(private router: Router, private feedService: FeedService, private store: BoraStore) {
  }
  
  ngOnInit(): void {
    this.feedService.getEventos().subscribe(dados => this.eventos = dados)
    console.log(this.eventos)
    //to pegando o id do usario por aqui
    this.idUsuario = this.store.getIdUsuario()
    console.log(this.idUsuario)
  }

  openModal(){
    this.mostrarPerfil = true
  }

  closeModal(){
    this.mostrarPerfil = false
  }

  goToRegisterEvent(){
    this.router.navigate(['/evento'])
  }

  goToChat(){
    this.router.navigate(['/chat'])
  }
}
