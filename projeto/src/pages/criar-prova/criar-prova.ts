import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IonicPage, NavController } from 'ionic-angular';

import { Altenativa } from './../../models/Altenativa';
import { Component } from '@angular/core';
import { DisciplinaProvider } from './../../providers/disciplina/disciplina';
import { Observable } from 'rxjs/Observable';
import { ProfessorProvider } from './../../providers/professor/professor';
import { Prova } from './../../models/prova';
import { ProvaProvider } from './../../providers/prova/prova';
import { Questao } from './../../models/questao';
import { ProfessorLogadoPage } from '../professor-logado/professor-logado';

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

  prova:Prova;
  questao: Questao;
  altenativa: Altenativa;
  disciplinas:  Observable<any[]>;
  disciplina;
  idProfessor;
  estagio:number;
  contador:number = 0;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase,
     private disciplinaProvider: DisciplinaProvider,
     private professorProvider: ProfessorProvider,
    private provaProvider:ProvaProvider) {
    this.prova = new Prova();
    this.iniciarQuestao();
    this.adicionarNomeProfessor();
    this.disciplinas= this.disciplinaProvider.getAll();
    this.idProfessor = this.professorProvider.idProfessor;
    
  }

  iniciarQuestao(){
    this.questao = null;
    this.questao = new Questao();
    for (var i = 0; i < 5; i++) {
      this.altenativa = new Altenativa();
      this.altenativa.validacao = false;
      this.questao.altenativa.push(this.altenativa);
    }
  }

  adicionarQuestao(){
    this.prova.questao.push(this.questao);
    this.iniciarQuestao();
    this.contador++;
  }
  salvaProva(){
    
    this.prova.estagio = this.estagio;
    this.prova.idDisciplina = this.disciplina;
    this.provaProvider.create(this.prova);
    this.navCtrl.push(ProfessorLogadoPage);
    
    
  }

  adicionarNomeProfessor(){
    let aux = this.professorProvider.getAll();
    aux.forEach(professor => {
      for (var i = 0; i < professor.length; i++) {
        if(professor[i].uid == this.idProfessor){
          this.prova.professor = professor[i].pessoa.nome;
          break;
        }
      }   
    });
  }

  cancelar(){
    this.navCtrl.push(ProfessorLogadoPage);
  }



}
