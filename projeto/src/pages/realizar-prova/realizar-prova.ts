import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlunoProvider } from '../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { Prova } from './../../models/prova';

/**
 * Generated class for the RealizarProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realizar-prova',
  templateUrl: 'realizar-prova.html',
})
export class RealizarProvaPage {
  prova;
  constructor(public navCtrl: NavController, public navParams: NavParams, private providerAluno: AlunoProvider) {
   
  }

  ionViewDidLoad() {
    this.prova = this.providerAluno.provaAluno;
    console.log(this.prova);
    console.log('ionViewDidLoad RealizarProvaPage');
  }

}
