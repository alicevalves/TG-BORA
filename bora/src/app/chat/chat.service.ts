import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  SERVER_URL = 'https://tg-bora-api.vercel.app';

  constructor(private http: HttpClient) {}

  postMensagem(data: any) {
    return this.http.post(`${this.SERVER_URL}/setmensagens`, data).pipe(take(1));
  }

  getMensagem(data: any) {
    return this.http.post(`${this.SERVER_URL}/setmensagens`, data).pipe(take(1));
  }
}
