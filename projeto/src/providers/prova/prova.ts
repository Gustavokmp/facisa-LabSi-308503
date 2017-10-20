import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Prova } from '../../models/prova';

/*
  Generated class for the ProvaProvider provider.

  See conflito ayrton 
  objection!!!
  and Angular DI.
*/
@Injectable()
export class ProvaProvider {

  provas: AngularFireList<any>;
  constructor(public db: AngularFireDatabase ) {
    
        var path = '/provas';
        this.provas = this.db.list(path);
      }
      getAll() {
        return this.provas.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
      }
      create(prova: Prova) {
        this.provas.push(prova);
      }
      editar(key,prova){
        this.provas.update(key, prova);
      }
      remover(key){
        this.provas.remove(key);
      }
    
    
      
    
    
    
    }