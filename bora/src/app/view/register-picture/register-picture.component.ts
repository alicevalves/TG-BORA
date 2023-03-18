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

  goToRegisterFace(){
    this.router.navigate(['/face'])
  }
}
