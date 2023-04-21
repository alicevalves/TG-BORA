import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from './feed.service';
import { BoraStore } from '../store/bora.store';
import { FeedResponse } from './feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent  {

  mostrarPerfil:boolean = false;
  eventos: any
  dadoUsuario: any

  constructor(private router: Router, private feedService: FeedService, private boraStore: BoraStore ) {
  }
  
  ngOnInit(): void {
    this.feedService.getEventos().subscribe(dados => this.eventos = dados)
    // setTimeout(() => {
    //   // this.boraStore.setIdUsuarioEvento(this.eventos.idUsuario);
    //   console.log(this.eventos.idUsuario)      
    // }, 3000);
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
