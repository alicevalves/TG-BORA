import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginGet } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  submitted = false;
  idusuario: any

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit():void {
  }

  putAlteraSenha() {
    this.submitted = true;
    // console.log(this.form.value);
    if (this.form.controls.email) {
      console.log('submit');
      this.loginService.putEsqueciMinhaSenha(this.form.controls.email.value).subscribe(
        (success) => alert('E-mail de redefinição de senha enviado para ' + this.form.controls.email.value + '.'),
        (error) =>
          alert('Erro ao tentar redefinir senha :('),
        () => console.log('request completo')
      );
    }
  }

  postLogin() {
    if (this.form.valid) {
      console.log('submit');
     this.loginService.postLogin(this.form.value).subscribe(
        dados =>  this.idusuario = dados,
      );

    }
  }

  backBtn(){
    this.router.navigate(['/inicial'])
  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }
}
