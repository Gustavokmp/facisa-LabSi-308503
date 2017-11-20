import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prova } from "./../../models/prova";

/**
 * Generated class for the FormularioProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario-prova',
  templateUrl: 'formulario-prova.html',
})
export class FormularioProvaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioProvaPage');
  }

  salvar() {
    // store that
  }

  sairprompt() {

  }

  enviarprova() {
   /* selection : void;
    
    if (choice) {
      
    } */
  }
}

class ProvaGerada {
 // prova.getQuestao(aluno, prova);
}
class FormularioExibicao {

  actualquestion = { 
    resposta : String
   };

}