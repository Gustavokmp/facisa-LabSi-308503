import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlunoProvider } from '../../providers/aluno/aluno';
import { Component } from '@angular/core';

/**
 * Generated class for the FormularioProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario-prova',
  templateUrl: 'formulario-prova.html',
})
export class FormularioProvaPage {
  
  questao;
  vez = 0;
  nota = 0;
  resposta;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alunoP:AlunoProvider) {
    this.questao = this.alunoP.provaAluno.questao[this.vez];
    console.log(this.alunoP.provaAluno);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioProvaPage');
  }
  proximaQuestao(){
    console.log(this.resposta);
    /* if(this.resposta ){
      console.log("entrou");
      this.nota += 1;
    } */
    this.vez += 1;
    /* this.questao = this.alunoP.provaAluno.qustao[this.vez]; */
    console.log(this.nota);
  }
  altenativaSelecionada(altenativa){
    console.log(altenativa);
    this.resposta = altenativa.validacao;
  }

  salvar() {
    // store that
  }

  sairprompt() {

  }

  enviarprova() {
   /* selection : void;
    
    if (choice) {
      
    } */
  }
}
/* 
class ProvaGerada {
 // prova.getQuestao(aluno, prova);
}
class FormularioExibicao {

  actualquestion = { 
    resposta : String
   };
 
} */