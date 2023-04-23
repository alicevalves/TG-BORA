import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent {
  form = new FormGroup({
    nome: new FormControl('', [Validators.pattern(/^[a-zA-Z\s]+$/)]),
    email: new FormControl('', [Validators.email]),
    oldSenha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
    ]),
  });

  menuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
