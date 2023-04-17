import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-picture',
  templateUrl: './register-picture.component.html',
  styleUrls: ['./register-picture.component.scss']
})
export class RegisterPictureComponent {
  constructor(private router: Router) { }

  ngOnInit():void {
  }

  backBtn(){
    this.router.navigate(['/register'])
  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }
}
