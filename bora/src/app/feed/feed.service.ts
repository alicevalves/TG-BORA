import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedResponse } from './feed';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private readonly API = 'https://tg-bora-api.vercel.app/geteventos'

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<FeedResponse[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }
}
