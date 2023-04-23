import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedResponse, Usuario } from './feed';
import { Observable, map, switchMap, tap } from 'rxjs';
import { BoraStore } from '../store/bora.store';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private readonly APIEVENTO = 'https://tg-bora-api.vercel.app/geteventos';

  private readonly APIUSUARIO =
    'https://tg-bora-api.vercel.app/getusuariosbyid/';

  eventoDado: FeedResponse;

  constructor(private http: HttpClient, private store: BoraStore) {}

  public getFeeds(): Observable<any[]> {
    return this.http.get<any[]>(this.APIEVENTO);
  }

  public getFeedsWithUserData(): Observable<any[]> {
    return this.getFeeds().pipe(
      map(feeds => {
        return feeds.map(feed => {
          const userId = feed.userId;
          const user$ = this.http.get(this.APIUSUARIO+`${userId}`);
          return {
            ...feed,
            user$: user$
          };
        });
      })
    );
  }

  getEventos() {
    return this.http.get<FeedResponse[]>(this.APIEVENTO).pipe(tap(console.log));
  }

  // getUsuarioPeloId(){
  //   return this.http.get<Usuario[]>(`${this.APIUSUARIO}/${this.eventoDado.idUsuario}`)
  //   .pipe(
  //     tap(console.log)
  //   )
  // }
}
