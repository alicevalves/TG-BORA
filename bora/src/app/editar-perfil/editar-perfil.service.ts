import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditarPerfilService {
  SERVER_URL = 'https://tg-bora-api.vercel.app/putusuarios';

  constructor(private http: HttpClient) {}

  putEsqueciMinhaSenha(
    id: any,
    data: any
  ) {
    console.log(id + data);
    return this.http
      .put(`${this.SERVER_URL}+${id}`, data)
      .pipe(take(1));
  }
}
