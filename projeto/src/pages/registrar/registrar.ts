import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Aluno } from './../../models/aluno';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { LoginPage } from './../login/login';
import { Pessoa } from './../../models/pessoa';
import { Professor } from './../../models/professor';
import { ProfessorProvider } from './../../providers/professor/professor';
import { RegistroProvider } from './../../providers/registro/registro';
import { Usuario } from './../../models/usuario';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
    usuario: Usuario;
    tipo:string;
    aluno:Aluno;
    professor:Professor;
    pessoa:Pessoa;
    id;
  
    constructor(public navCtrl: NavController,
                public registroProvider: RegistroProvider,
                private alunoP: AlunoProvider,
                private professorP: ProfessorProvider ) {
                this.usuario = new Usuario();
                this.pessoa = new Pessoa();
                this.aluno = new Aluno();
                this.professor = new Professor();
    }
    registrar(){
      this.registroProvider.registrarSe(this.usuario);
      this.pegaId();   
      this.navCtrl.push(LoginPage);
    }


    pegaId(){
      setTimeout(()=> {
        this.id = this.registroProvider.idCadastrado;
        if(this.id == null){
          this.pegaId();
        }
        if(this.id == "erro"){
          console.log("Erro");
        }else{
          if(this.tipo == "aluno"){
            this.cadastraAluno();
          }
          else{
            this.cadastraProfessor();
          }
        }
      }, 1000);
    }

    cadastraAluno(){
      this.aluno.pessoa = this.pessoa;
      this.aluno.uid = this.id;
      this.alunoP.create(this.aluno);
    }
    cadastraProfessor(){
      this.professor.pessoa = this.pessoa;
      this.professor.uid = this.id;
      this.professorP.create(this.professor);
    }
  
  
}