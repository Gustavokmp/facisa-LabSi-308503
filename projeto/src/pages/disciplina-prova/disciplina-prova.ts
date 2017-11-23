import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import {AlunoProvider} from '../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { FormularioProvaPage } from '../formulario-prova/formulario-prova';
import { RealizarProvaPage } from './../realizar-prova/realizar-prova';
import { AlunoLogadoPage } from '../aluno-logado/aluno-logado';

/**
 * Generated class for the DisciplinaProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina-prova',
  templateUrl: 'disciplina-prova.html',
})
export class DisciplinaProvaPage {
  disciplina;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private alunoP: AlunoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisciplinaProvaPage');
  }

  realizarProva(id,nome){
    console.log(id,nome);
    this.alunoP.pegaProva(this.disciplina);
    this.alunoP.nomeDisciplina = nome;
   
  }
/*

Janela de provas ideia
Esta seria a seleção
Terá uma função de OK para exibir uma mensagem de carregar
então o server irá verificar pra ver se o aluno pode
fazer a prova, se puder, exibe a opção de confirmar. Ele não
pode confirmar até verificar
A prova só pode ser aberta com o numero, e ele é registrado
para fins de controle. 
A página permite exibir as questões de acordo
com o num disponivel, passando elas ao clicar em avançar ou voltar.

*/
  ok(){
     if(this.alunoP.provaAluno == "" ){
      let alert = this.alertCtrl.create({
        title: 'Não pode',
        subTitle: 'Não existe prova para essa disciplina',
        buttons: ['Ok']
      });
      alert.present();
      // alert("Não tem prova para essa disciplina");
      return false;
    }else{

      this.navCtrl.push(RealizarProvaPage);
    }
  }

  goToProva() {
    this.navCtrl.push(FormularioProvaPage);
  
  }
  cancelar(){
    this.navCtrl.push(AlunoLogadoPage);
  }

}
