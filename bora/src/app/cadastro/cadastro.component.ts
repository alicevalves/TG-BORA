import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    linkedin: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  submitted = false

  constructor(
    private router: Router,
    private cadastroService: CadastroService
  ) {}

  ngOnInit(): void {
  }

  postUser(){
      this.submitted = true
      console.log(this.form.value)
      if (this.form.valid) {
        console.log('submit')
        this.cadastroService.postUsuarios(this.form.value).subscribe(
          success => console.log("Sucesso"),
          error => console.error(error),
          () => console.log('request completo')
        )
      }
  }

  backBtn() {
    this.router.navigate(['/inicial']);
  }
}
