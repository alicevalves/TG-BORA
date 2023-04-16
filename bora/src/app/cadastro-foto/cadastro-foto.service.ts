import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroFotoService {

  SERVER_URL = 'https://tg-bora-api.vercel.app';

  constructor(private http: HttpClient) { }

  postFoto(data: any) {
    return this.http.post(`${this.SERVER_URL}/setusuarios`, data).pipe(take(1));
  }
}
