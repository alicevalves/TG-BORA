import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  goToChats(){
    this.router.navigate(['/conversas'])
  }
}
