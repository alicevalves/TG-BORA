import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  backBtn(){
    this.router.navigate(['/initial'])
  }

  goToRegisterPhoto() {
    this.router.navigate(['/picture']);
  }

}
