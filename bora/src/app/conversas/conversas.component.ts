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

  goToFeed(){
    this.router.navigate(['/feed'])
  }

  goToChat(){
    this.router.navigate(['/chat'])
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
