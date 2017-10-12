
import { DisciplinaProvider } from './../../providers/disciplina/disciplina';
import { Disciplina } from './../../models/disciplina';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the CriarProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-prova',
  templateUrl: 'criar-prova.html',
})
export class CriarProvaPage {
  items: FirebaseListObservable<any[]>;
  
  disciplina = {} as Disciplina;
  constructor(public navCtrl: NavController, public db:AngularFireDatabase,
              private disciplinaProvider: DisciplinaProvider) {
              this.items= this.disciplinaProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarProvaPage');
  }
  salvar(disciplina){
    if(this.disciplina.nome){
      return this.items.update(this.disciplina.nome,{disciplina:this.disciplina})
    }else{
      this.items.push(this.disciplina);
    }
    
  }
  editar(){
    if(this.disciplina.keyReference){
      return this.items.update(this.disciplina.keyReference,{disciplina:this.disciplina});
    }else{
      return console.log("Não Encontrado!!");
      
    }
    
  }

}
