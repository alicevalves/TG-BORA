import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroFotoService } from './cadastro-foto.service';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {
  constructor(private router: Router, private fotoService: CadastroFotoService) { }

  form = new FormGroup({
    fotoPerfil: new FormControl('', Validators.required),
  });
  
  ngOnInit():void {
  }

  postFoto(){
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('submit')
      this.fotoService.postFoto(this.form.value).subscribe(
        success => console.log("Sucesso"),
        error => console.error(error),
        () => console.log('request completo')
      )
    }
}

  backBtn(){
    this.router.navigate(['/cadastro'])
  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }
}
