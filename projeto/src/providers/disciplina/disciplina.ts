
import { Disciplina } from './../../models/disciplina';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RegistroProvider } from './../registro/registro';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the DisciplinaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DisciplinaProvider {
  items: FirebaseListObservable<any[]>;
  disciplina: Disciplina;
  constructor(
              public registroProvider:RegistroProvider,
              public db: AngularFireDatabase,
            ) {
               {
                var path = '/disciplina/';
                this.items = db.list(path);
              };
    
  }
  getAll(){
    return this.items;
  }
  
  
  
  
}
