import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.scss']
})
export class RegisterEventComponent {
  constructor(private router:Router) { }

  ngOnInit():void {
  }

  backBtn(){
    this.router.navigate(['/feed'])
  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }
}
