import 'rxjs/add/operator/map';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { Historico } from '../../models/historico';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HistoricoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoricoProvider {

  historico: AngularFireList<any>;
  constructor(public db: AngularFireDatabase ) {
    
        var path = '/historicos';
        this.historico = this.db.list(path);
      }
	  /* Retorna todas as historico que estão na base de dados gustavo conflito*/
      getAll() {
        return this.historico.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
      }
      create(historico:Historico) {
        this.historico.push(historico);
      }
      editar(key,historico){
        this.historico.update(key, historico);
      }
      remover(key){
        this.historico.remove(key);
      }
    

}
