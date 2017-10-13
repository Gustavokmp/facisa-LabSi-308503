import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdicionarAlunoDisciplinaPage } from './../adicionar-aluno-disciplina/adicionar-aluno-disciplina';
import { CadastraDisciplinaPage } from './../cadastra-disciplina/cadastra-disciplina';
import { CadastrarNotasPage } from './../cadastrar-notas/cadastrar-notas';
import { Component } from '@angular/core';
import { ProfessorProvider } from './../../providers/professor/professor';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private professorProvider:ProfessorProvider) {
    this.professorProvider.pegaIdProfessor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorLogadoPage');
  }

  goCriarDisciplina(){
    this.navCtrl.push(CadastraDisciplinaPage);
  }
  goCadastrarNota(){
    this.navCtrl.push(CadastrarNotasPage);
  }
  goCadastraAluno(){
    this.navCtrl.push(AdicionarAlunoDisciplinaPage);
  }
  goVerHistorico(){
    console.log("Em Construção")
  }

}
