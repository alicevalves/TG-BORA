import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';
import { BoraStore } from '../store/bora.store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  form = new FormGroup({
    mensagem: new FormControl('', Validators.required),
  });

  dataHora: Date = new Date();
  idUsuDestino: any;

  constructor(private router: Router, private chatService: ChatService, private store:BoraStore) {}

  ngOnInit(): void {

  }

  postMensagem(){
   this.idUsuDestino =  this.store.getIdUsuarioEvento()
   const  messageData = {
      mensagem: this.form.controls.mensagem.value,
      dataHoraEnvio: this.dataHora.toLocaleString(),
      idUsuDestino: this.idUsuDestino,
      idUsuario: this.store.getIdUsuario(),
    }
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('submit')
      this.chatService.postMensagem(this.form.value).subscribe(
        success => alert("Mensagem Enviada" + this.form.value),
        error => console.error(error),
        () => console.log('request completo')
      )
    }
  }

  goToChats(){
    this.router.navigate(['/conversas'])
  }
}
