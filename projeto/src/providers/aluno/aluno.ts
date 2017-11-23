import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Aluno } from '../../models/aluno';
import { AngularFireAuth } from 'angularfire2/auth';
import { DisciplinaProvider } from './../disciplina/disciplina';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ProvaProvider } from './../prova/prova';

/*
  Generated class for the AlunoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoProvider {
  
  alunos: AngularFireList<any>;
  idAluno;
  disciplinasMatriculado = [];
  provaAluno;
  nomeDisciplina;
  nota;

  constructor(public db: AngularFireDatabase,public afAuth: AngularFireAuth, 
    private disciplina:DisciplinaProvider,
  private prova:ProvaProvider) {
    var path = '/alunos';
    this.alunos = this.db.list(path);
    
  }

  getAll() {
    return this.alunos.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  create(aluno: Aluno) {
    this.alunos.push(aluno);
  }
  editar(key,aluno){
    this.alunos.update(key, aluno);
  }
  remover(key){
    this.alunos.remove(key);
  }
  pegaIdAluno(){
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.pegaKeyAluno(res.uid);
      } else {
        console.log("Erro");
      }
    });
  }
  pegaKeyAluno(id){
    let aux = this.getAll();
    aux.forEach(alunos => {
      for (var i = 0; i < alunos.length; i++) {
          if(alunos[i].uid == id){
            this.idAluno = alunos[i].key;
            break;
          }
        break;
      }
    });
  }

  disciplinasRelacionadas(){
    let aux = this.disciplina.getAll();
    let disciplinasAchadas = [];
    aux.forEach(disciplinas => {
      for (var i = 0; i < disciplinas.length; i++) {
       for (var j = 0; j < disciplinas[i].alunos.length; j++) {
         if(disciplinas[i].alunos[j] == this.idAluno){
           this.disciplinasMatriculado.push(disciplinas[i]);
           break;
           
         }
       }
        
      }
    }); 

    
  }

  pegaProva(id){
    this.provaAluno = "";
    let aux = this.prova.getAll();
    aux.forEach(provas => {
      for (var i = 0; i < provas.length; i++) {
       if(provas[i].idDisciplina == id){
         this.provaAluno = provas[i];
         break;
       }
      }
    });
  }


}
