import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  form = new FormGroup({
    mensagem: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private chatService: ChatService) {}

  ngOnInit(): void {

  }

  postMensagem(){
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
