import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { Usuarios } from './cadastro';

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
    fotoPerfil: new FormControl('', Validators.required),

  });

  submitted = false
  base64: any
  dadosUsuarios: Usuarios

  constructor(
    private router: Router,
    private cadastroService: CadastroService
  ) {}

  ngOnInit(): void {
  }

  onInputChanged(event: any) {
    let targetEvent = event.target;
    let file: Blob = targetEvent.files[0];
    let fileReader: FileReader = new FileReader();

    fileReader.onload = (e) => {
      this.base64 = fileReader.result;
      console.log('the res ', this.base64);
    };

    fileReader.readAsDataURL(file);
  }

  postUser(){
     this.dadosUsuarios = {
      nome: this.form.controls.nome.value,
      email: this.form.controls.email.value,
      linkedin: this.form.controls.linkedin.value,
      senha: this.form.controls.senha.value,
      fotoPerfil: this.base64,
    }
      if (this.form.valid) {
        console.log('submit')
        this.cadastroService.postUsuarios(this.dadosUsuarios).subscribe(
          success => console.log("Sucesso"),
          error => console.error(error),
          () => console.log('request completo')
        )
        console.log(this.dadosUsuarios)

      }
  }



  backBtn() {
    this.router.navigate(['/inicial']);
  }
}
