import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Disciplina } from './../../models/disciplina';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RegistroProvider } from './../registro/registro';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the DisciplinaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DisciplinaProvider {

  disciplinas: FirebaseListObservable<any[]>;
  constructor(public registroProvider: RegistroProvider, public db: AngularFireDatabase, ) {

    var path = '/disciplinas';
    this.disciplinas = this.db.list(path);


  }
  getAll() {
    return this.disciplinas.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  create(disciplina: Disciplina) {
    this.disciplinas.push(disciplina);
  }
  editar(key,disciplina){
    this.disciplinas.update(key, disciplina);
  }
  remover(key){
    this.disciplinas.remove(key);
  }


  



}
