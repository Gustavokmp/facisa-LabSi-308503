import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Professor } from './../../models/professor';

/*
  Generated class for the ProfessorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfessorProvider {

  professores: AngularFireList<any>;
  idProfessor;
  
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    var path = '/professores';
    this.professores = this.db.list(path);
  }

  getAll() {
    return this.professores.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  create(professor: Professor) {
    this.professores.push(professor);
  }
  editar(key,professor){
    this.professores.update(key, professor);
  }
  remover(key){
    this.professores.remove(key);
  }

  pegaIdProfessor(){
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.idProfessor = res.uid;
      } else {
        console.log("Erro");
      }
    });
  }

}
