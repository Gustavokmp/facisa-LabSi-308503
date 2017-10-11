import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDisciplinaPage } from './lista-disciplina';

@NgModule({
  declarations: [
    ListaDisciplinaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDisciplinaPage),
  ],
})
export class ListaDisciplinaPageModule {}
