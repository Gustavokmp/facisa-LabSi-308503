import { FirebaseListObservable } from 'angularfire2/database';
import { DisciplinaServiceProvider } from './../../providers/disciplina-service/disciplina-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CadastroDisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-disciplina',
  templateUrl: 'cadastro-disciplina.html',
})
export class CadastroDisciplinaPage {

  items: FirebaseListObservable<any[]>;

  disciplinaName : string;
  disciplinaKey : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private disciplinaService: DisciplinaServiceProvider) {
    
    this.disciplinaName = '';
    this.disciplinaKey = '';

    if(this.navParams.data.name){
      this.disciplinaName = this.navParams.data.disciplina.name;

      this.disciplinaName = this.navParams.data.disciplina.$key;
    }
    this.items = this.disciplinaService.getAll();

  }
  salvar(){
      this.disciplinaService.save(this.disciplinaName, this.disciplinaKey);
      this.navCtrl.pop();
  }


  

}
