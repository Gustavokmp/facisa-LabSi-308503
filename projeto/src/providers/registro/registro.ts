
import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from './../../models/usuario';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the RegistroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistroProvider {

  constructor(
    public afAuth: AngularFireAuth) {
    console.log('Hello LoginProvider Provider');
}

  async registrarSe(usuario: Usuario){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(usuario.email , usuario.senha);
      console.log(result);
      }catch(e){
      console.error(e);
      }
    }
  
}
