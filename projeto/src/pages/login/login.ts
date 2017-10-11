<<<<<<< HEAD
import { AlunoLogadoPage } from './../aluno-logado/aluno-logado';
import { ProfessorLogadoPage } from './../professor-logado/professor-logado';
import { RegistrarPage } from './../registrar/registrar';
import { Usuario } from './../../models/usuario';
=======
import { HomePage } from './../home/home';

import { CadastroPage } from './../cadastro/cadastro';
import { User } from './../../models/user';
>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
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

<<<<<<< HEAD
  usuario = {} as Usuario;
  constructor(private afAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {

  }

  goRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }
  async logarProfessor(usuario: Usuario) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email ,  usuario.senha);
      if(result){
        this.navCtrl.push(ProfessorLogadoPage);
=======
  user = {} as User;

  constructor(private afAuth : AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }


  async logar(user: User) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email ,  user.password);
      if(result){
        this.navCtrl.push(HomePage);
>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4
      }
      
    }catch (e){
      console.error(e);
    }
    
  }
<<<<<<< HEAD
  async logarAluno(usuario: Usuario) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email ,  usuario.senha);
      if(result){
        this.navCtrl.push(AlunoLogadoPage);
      }
      
    }catch (e){
      console.error(e);
    }
    
=======

  cadastro(){
    this.navCtrl.push(CadastroPage);
>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4
  }
}
