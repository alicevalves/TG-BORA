import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-face',
  templateUrl: './register-face.component.html',
  styleUrls: ['./register-face.component.scss']
})
export class RegisterFaceComponent {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }
}
