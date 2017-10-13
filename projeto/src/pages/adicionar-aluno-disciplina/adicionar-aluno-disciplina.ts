import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlunoProvider } from './../../providers/aluno/aluno';
import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { DisciplinaProvider } from './../../providers/disciplina/disciplina';
import { Observable } from 'rxjs/Observable';
import { ProfessorProvider } from './../../providers/professor/professor';

/**
 * Generated class for the AdicionarAlunoDisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-aluno-disciplina',
  templateUrl: 'adicionar-aluno-disciplina.html',
})
export class AdicionarAlunoDisciplinaPage {
  disciplinas:  Observable<any[]>;
  alunos: Observable<any[]>;
  disciplina;
  listaAluno;
  idProfessor;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   private disciplinaProvider: DisciplinaProvider, private alunoProvider:AlunoProvider,private professorProvider:ProfessorProvider) {
    this.disciplinas= this.disciplinaProvider.getAll();
    this.alunos = this.alunoProvider.getAll();
    
    this.idProfessor = this.professorProvider.idProfessor;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarAlunoDisciplinaPage');
  }
  adicionarAlunos(){
   this.disciplinaProvider.editar(this.disciplina,{alunos:this.listaAluno});
  }

}
