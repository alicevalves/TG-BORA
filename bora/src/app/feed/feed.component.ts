import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  teste:boolean = false;


  constructor(private router: Router) {}
  ngOnInit(): void {

  }

  openModal(){
    this.teste = true
  }
  closeModal(){
    this.teste=false
  }
  goToRegisterEvent(){
    this.router.navigate(['/event'])
  }

  goToChat(){
    this.router.navigate(['/chat'])
  }
}
