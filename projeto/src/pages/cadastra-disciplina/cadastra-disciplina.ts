import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { Disciplina } from './../../models/disciplina';
import { DisciplinaProvider } from './../../providers/disciplina/disciplina';
import { ProfessorProvider } from './../../providers/professor/professor';
import { RegistroProvider } from './../../providers/registro/registro';

/**
 * Generated class for the CadastraDisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastra-disciplina',
  templateUrl: 'cadastra-disciplina.html',
})
export class CadastraDisciplinaPage {


  disciplina = {} as Disciplina;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private disciplinaP:DisciplinaProvider, private registro:RegistroProvider,private professorProvider:ProfessorProvider) {
      
      this.disciplina.uidProfessor = this.professorProvider.idProfessor;
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraDisciplinaPage');
  }
  cria(){
    console.log(this.disciplina);
    this.disciplinaP.create(this.disciplina);
  }

}
