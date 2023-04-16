import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroEventoService } from './cadastro-evento.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss'],
})
export class CadastroEventoComponent {
  form = new FormGroup({
    nomeEvento: new FormControl('', Validators.required),
    descricaoEvento: new FormControl('', Validators.required),
    localEvento: new FormControl('', Validators.required),
    dataEvento: new FormControl('', Validators.required),
  });

  submitted = false;

  constructor(
    private router: Router,
    private eventoService: CadastroEventoService
  ) {}

  ngOnInit(): void {}

  postUser() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.eventoService.postEventos(this.form.value).subscribe(
        (success) => alert('Evento cadastrado com sucesso!'),
        (error) =>
          alert('Erro ao cadastrar evento. Tente novamente mais tarde'),
        () => console.log('request completo')
      );
      setTimeout(() => {
        this.router.navigate(['/feed']);        
      }, 2000);
    }
  }

  backBtn() {
    this.router.navigate(['/feed']);
  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }
}
