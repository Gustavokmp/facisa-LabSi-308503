import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IonicPage, NavController } from 'ionic-angular';

import { Component } from '@angular/core';
import { Disciplina } from './../../models/disciplina';
import { DisciplinaProvider } from './../../providers/disciplina/disciplina';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the CriarProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-prova',
  templateUrl: 'criar-prova.html',
})
export class CriarProvaPage {
  items:  AngularFireList<any>;
  disciplina = {} as Disciplina;
  constructor(public navCtrl: NavController, public db:AngularFireDatabase,
              private disciplinaProvider: DisciplinaProvider) {
              /* this.items= this.disciplinaProvider.getAll(); */
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad CriarProvaPage');
  }
  lista(){
  this.items.forEach(item => {
    console.log(item);
  });
  }
  create(){
    this.disciplinaProvider.create(this.disciplina);
  } */

}
