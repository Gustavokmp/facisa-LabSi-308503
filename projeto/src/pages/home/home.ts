import { ListaDisciplinaPage } from './../lista-disciplina/lista-disciplina';
import { DisciplinaServiceProvider } from './../../providers/disciplina-service/disciplina-service';
import { CadastroDisciplinaPage } from './../cadastro-disciplina/cadastro-disciplina';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth : AngularFireAuth, private toast : ToastController,
    public navCtrl: NavController, public navParams: NavParams, private disciplinaService: DisciplinaServiceProvider) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: 'Bem vindo',
          duration: 3000
        }).present();
      }
      else{
        this.navCtrl.push(CadastroPage);
      }
    })
    
  }
  goToCadastrarDisciplina(){
    this.navCtrl.push(CadastroDisciplinaPage);
  }
  goToListaDisciplinas(){
    this.navCtrl.push(ListaDisciplinaPage);
  }

  

}
