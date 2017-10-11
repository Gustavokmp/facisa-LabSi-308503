import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';



/*
  Generated class for the DisciplinaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DisciplinaServiceProvider {
  items : FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => {
      var path = '/disciplinas/' + user.uid;
      this.items = db.list(path);
    })
  }

  public getAll(){
    return this.items;
  }
  public save(name: string , key: string){
    if(key){
      return this.items.update(key, {name: name})
    }else{
      return this.items.push({name: name});
    }
  }
  public remove(key: string){
    return this.items.remove(key);
  }
  

}
