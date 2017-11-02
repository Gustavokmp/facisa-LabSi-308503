import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionarProfessorPage } from './selecionar-professor';

@NgModule({
  declarations: [
    SelecionarProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecionarProfessorPage),
  ],
})
export class SelecionarProfessorPageModule {}
