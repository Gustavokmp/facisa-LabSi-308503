import { IonicPage, NavController } from 'ionic-angular';

import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Disciplina } from './../../models/disciplina';
import { DisciplinaProvider } from './../../providers/disciplina/disciplina';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the CadastrarNotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-notas',
  templateUrl: 'cadastrar-notas.html',
})
export class CadastrarNotasPage {

  items: Observable<any>;
  
  disciplina = {} as Disciplina;
  constructor(public navCtrl: NavController,
              private disciplinaProvider: DisciplinaProvider) {
              this.items = this.disciplinaProvider.getAll();
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarNotasPage');
  }

  salvar(disciplina){
    if(this.disciplina.nome){
      return this.items.update(this.disciplina.nome,{disciplina:this.disciplina})
    }
    
  }
  

}
