import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.scss']
})
export class ConversasComponent {

  menuOpen = false
  
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  goToChat(){
    this.router.navigate(['/chat'])
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

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
