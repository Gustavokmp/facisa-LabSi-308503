import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlunoLogadoPage } from './../aluno-logado/aluno-logado';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { Historico } from '../../models/historico';
import { HistoricoProvider } from '../../providers/historico/historico';


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
  nota = 0;
  vez = 1;
  resposta;
  constructor(public navCtrl: NavController, public navParams: NavParams, private providerAluno: AlunoProvider,private historicoP:HistoricoProvider) {
   
  }

  ionViewDidLoad() {
    this.prova = this.providerAluno.provaAluno.questao;
    console.log(this.prova);
    console.log('ionViewDidLoad RealizarProvaPage');
  }

  selecionada(resposta){
  this.resposta = resposta;
  }

  responder(){
    if(this.resposta){
      this.nota++;
    }
    this.vez++;
    console.log(this.nota);
  }
  sair(){
    let h = new Historico();
    h.idAluno = this.providerAluno.idAluno;
    h.idDisciplina = this.providerAluno.provaAluno.idDisciplina;
    h.nomeDisciplina = this.providerAluno.nomeDisciplina;
    h.nota = this.providerAluno.nota;
    this.historicoP.create(h);
    this.navCtrl.push(AlunoLogadoPage);
  }
}
