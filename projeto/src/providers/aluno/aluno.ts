import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Aluno } from '../../models/aluno';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlunoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoProvider {
  
  alunos: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {
    var path = '/alunos';
    this.alunos = this.db.list(path);
  }

  getAll() {
    return this.alunos.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  create(aluno: Aluno) {
    this.alunos.push(aluno);
  }
  editar(key,aluno){
    this.alunos.update(key, aluno);
  }
  remover(key){
    this.alunos.remove(key);
  }


}
