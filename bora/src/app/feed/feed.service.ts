import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedResponse, Usuario } from './feed';
import { tap } from 'rxjs';
import { BoraStore } from '../store/bora.store';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private readonly APIEVENTO = 'https://tg-bora-api.vercel.app/geteventos'

  private readonly APIUSUARIO = 'https://tg-bora-api.vercel.app/getusuariosbyid'

  eventoDado: FeedResponse

  constructor(private http: HttpClient,  private store: BoraStore
    ) { }

  getEventos(){
    return this.http.get<FeedResponse[]>(this.APIEVENTO)
    .pipe(
      tap(console.log)
    )
  }
  getUsuarioPeloId(){
    return this.http.get<Usuario[]>(`${this.APIUSUARIO}/5F0LeRvqmRZnEakxpK3SFiQLxZf2`)
    .pipe(
      tap(console.log)
    )
  }
}
