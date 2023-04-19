import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoraState } from '../state/bora.state';

@Injectable({
  providedIn: 'root'
})
export class BoraStore {

  private boraStore$ = new BehaviorSubject<BoraState>(new BoraState)

  getBoraState(){
    return this.boraStore$.asObservable();
  }

  setIdUsuarioLogado(idusuario: string){
    this.boraStore$.next({
      ...this.boraStore$.value,
      login: {
        ...this.boraStore$.value.login,
        idusuario
      }
    })
  }

  getIdUsuario(){
    return this.boraStore$.getValue().login.idusuario
  }

  constructor() { }
}
