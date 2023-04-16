import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from './feed.service';
import { FeedResponse } from './feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  mostrarPerfil:boolean = false;
  eventos: any

  constructor(private router: Router, private feedService: FeedService) {}
  
  ngOnInit(): void {
    this.feedService.getEventos().subscribe(dados => this.eventos = dados)
    console.log(this.eventos)
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
