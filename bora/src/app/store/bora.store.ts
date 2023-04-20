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

  setIdUsuarioLogado(idUsuario: string){
    this.boraStore$.next({
      ...this.boraStore$.value,
      usuario: {
        ...this.boraStore$.value.usuario,
        idUsuario
      }
    })
  }

  getIdUsuario(){
    console.log(this.boraStore$.value.usuario.idUsuario)
    return this.boraStore$.value.usuario.idUsuario.idUsuario
  }

  constructor() { }
}