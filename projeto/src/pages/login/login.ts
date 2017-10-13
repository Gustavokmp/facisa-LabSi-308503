import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlunoLogadoPage } from './../aluno-logado/aluno-logado';
import { AngularFireAuth } from "angularfire2/auth";
import { Component } from '@angular/core';
import { ProfessorLogadoPage } from './../professor-logado/professor-logado';
import { RegistrarPage } from './../registrar/registrar';
import { Usuario } from './../../models/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  usuario = {} as Usuario;
  tipo:string = "aluno";
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
      this.usuario.email = "gustavo@gmail.com";
      this.usuario.senha = "gustavo"
  }

  goRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }
  async logarProfessor(usuario: Usuario) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email ,  usuario.senha);
      if(result){
        console.log(result);
        this.navCtrl.push(ProfessorLogadoPage);
      }
      
    }catch (e){
      console.error(e);
    }
    
  }
  async logarAluno(usuario: Usuario) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email ,  usuario.senha);
      if(result){
        this.navCtrl.push(AlunoLogadoPage);
      }
      
    }catch (e){
      console.error(e);
    }
    
  }
}
