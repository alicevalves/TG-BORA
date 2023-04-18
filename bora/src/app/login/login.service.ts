import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  SERVER_URL = 'https://tg-bora-api.vercel.app';

  constructor(private http: HttpClient) { }

  putEsqueciMinhaSenha(data: any) {
    console.log(data)
    return this.http.put(`${this.SERVER_URL}/alteraSenha`, {email:data} ).pipe(take(1));
  }
}
