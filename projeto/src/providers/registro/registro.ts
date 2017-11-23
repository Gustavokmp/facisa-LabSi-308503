import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Usuario } from './../../models/usuario';

/*
  Generated class for the RegistroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistroProvider {

  idCadastrado;
 
  constructor(
    public afAuth: AngularFireAuth) {
}

  async registrarSe(usuario: Usuario){
    try{
      let result = await this.afAuth.auth.createUserWithEmailAndPassword(usuario.email , usuario.senha);
      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          this.idCadastrado= res.uid;
        } else {
          this.idCadastrado = "erro";
        }
      });
      }catch(e){
      console.error(e);
      }

      
    }
    
  
}
