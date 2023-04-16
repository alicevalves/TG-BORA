import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {
  constructor(private router: Router) { }

  ngOnInit():void {
  }

  backBtn(){
    this.router.navigate(['/register'])
  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }
}
