import { Observable } from 'rxjs/Observable';

import { HistoricoProvider } from './../../providers/historico/historico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlunoProvider } from '../../providers/aluno/aluno';
import { DisciplinaProvider } from '../../providers/disciplina/disciplina';
import { AlunoLogadoPage } from '../aluno-logado/aluno-logado';


/**
 * Generated class for the AlunoHistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno-historico',
  templateUrl: 'aluno-historico.html',
})
export class AlunoHistoricoPage {
 
  historicos: Observable<any[]>;
  idAluno;
  disciplinas: Observable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public historicoP: HistoricoProvider,
              public alunoP: AlunoProvider, public disciplinaP: DisciplinaProvider) {
     this.historicos = this.historicoP.getAll();
     this.disciplinas = this.disciplinaP.getAll();
     this.idAluno = this.alunoP.idAluno;
     

  }
  sair(){
    this.navCtrl.push(AlunoLogadoPage);
  }

  

}
