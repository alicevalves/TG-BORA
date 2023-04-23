import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from './feed.service';
import { BoraStore } from '../store/bora.store';
import { FeedResponse } from './feed';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent  {

  mostrarPerfil:boolean = false; 
  eventos: any;
  idUsuario: any
  dadoUsuario: any
  index: number
  public menuOpen = false;


  constructor(private router: Router, private feedService: FeedService, private boraStore: BoraStore ) {
  }
  
  ngOnInit(): void {
    console.log(this.boraStore.getIdUsuarioLogado())
    this.feedService.getEventos().subscribe(dados => this.eventos = dados)
    setTimeout(() => {
      // const id = this.eventos[0].idUsuario  
      // console.log(id)

      // this.feedService.getDadosUsuarios('95mrLblYBkdDqaCRNDsz7PXK7IE3').subscribe(dados => this.dadoUsuario = dados)
      // console.log(this.dadoUsuario)
    }, 1000);
  }

  setDadosDoUsuario(index: number){
    const id = this.eventos[index].idUsuario
    console.log(id)
  }

  public onItemClick(index: number): void {
    this.boraStore.setIdUsuarioEvento(this.eventos[index].idUsuario);
    console.log(this.boraStore.getIdUsuarioEvento())  
    console.log(`Item ${index} clicado`);
    // this.router.navigate(['/chat'])
  }
  
  openModal(){
    this.mostrarPerfil = true
  }

  closeModal(){
    this.mostrarPerfil = false
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }

  goToEdit(){
    this.router.navigate(['/perfil'])
  }

  goToConversas(){
    this.router.navigate(['/conversas'])
  }


  goToRegisterEvent(){
    this.router.navigate(['/evento'])
  }

  goToChat(){
    this.router.navigate(['/chat'])
  }
}
