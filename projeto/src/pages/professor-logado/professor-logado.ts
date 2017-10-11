
import { CadastrarNotasPage } from './../cadastrar-notas/cadastrar-notas';

import { CriarProvaPage } from './../criar-prova/criar-prova';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfessorLogadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professor-logado',
  templateUrl: 'professor-logado.html',
})
export class ProfessorLogadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorLogadoPage');
  }

  goCriarProva(){
    this.navCtrl.push(CriarProvaPage);
  }
  goCadastrarNota(){
    this.navCtrl.push(CadastrarNotasPage);
  }
  goVerHistorico(){
    console.log("Em Construção")
  }

}
