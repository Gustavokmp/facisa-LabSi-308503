import { Prova } from './../../models/prova';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoProvider } from '../../providers/aluno/aluno';

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
    this.prova = this.providerAluno.provaAluno;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealizarProvaPage');
  }

}
