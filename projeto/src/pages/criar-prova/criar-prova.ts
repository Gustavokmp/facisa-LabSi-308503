import { Disciplina } from './../../models/disciplina';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  items: FirebaseListObservable<any[]>;
  disciplina = {} as Disciplina;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase) {
    this.items= db.list('/disciplinas')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarProvaPage');
  }
  salvar(){
    this.items.push(this.disciplina);
  }

}
