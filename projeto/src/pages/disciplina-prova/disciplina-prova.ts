import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AlunoProvider} from '../../providers/aluno/aluno';
import { Component } from '@angular/core';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private alunoP: AlunoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisciplinaProvaPage');
  }

  realizarProva(id){
    console.log(id);
    this.alunoP.pegaProva(this.disciplina);
   
  }

  ok(){
    console.log(this.alunoP.provaAluno);
     if(this.alunoP.provaAluno == "" ){
      alert("Não tem prova para essa disciplina");
    }else{
      alert("Existe prova para essa disciplina");
    }
  }

}
