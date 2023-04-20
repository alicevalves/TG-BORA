import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroFotoService } from './cadastro-foto.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss'],
})
export class CadastroFotoComponent {
  constructor(
    private router: Router,
    private fotoService: CadastroFotoService,
    private sant: DomSanitizer
  ) {}

  form = new FormGroup({
    fotoPerfil: new FormControl('', Validators.required),
  });

  title = 'img';
  base64: any;

  ngOnInit(): void {}

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

  postFoto() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.fotoService.postFoto(this.base64).subscribe(
        (success) => console.log('Sucesso'),
        (error) => console.error(error),
        () => console.log('request completo')
      );
    }
  }

  backBtn() {
    this.router.navigate(['/cadastro']);
  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }
}
