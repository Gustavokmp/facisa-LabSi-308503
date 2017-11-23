
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { DisciplinaProvaPage } from './../disciplina-prova/disciplina-prova';
import { AlunoHistoricoPage } from '../aluno-historico/aluno-historico';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AlunoLogadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno-logado',
  templateUrl: 'aluno-logado.html',
})
export class AlunoLogadoPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private alunoP: AlunoProvider) {
   this.alunoP.pegaIdAluno();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoLogadoPage');
  }
  verDisicplinas(){
    this.alunoP.disciplinasRelacionadas();
    this.navCtrl.push(DisciplinaProvaPage);
  }

  verHistorico() {
    this.navCtrl.push(AlunoHistoricoPage);
  }
  cancelar(){
    this.navCtrl.push(LoginPage);
  }

}
