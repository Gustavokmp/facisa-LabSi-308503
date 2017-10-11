import { DisciplinaServiceProvider } from './../../providers/disciplina-service/disciplina-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ListaDisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-disciplina',
  templateUrl: 'lista-disciplina.html',
})
export class ListaDisciplinaPage {

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private disciplinaService: DisciplinaServiceProvider) {
    this.items = this.disciplinaService.getAll();
  }

  
}
