import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionarProvasPage } from './selecionar-provas';

@NgModule({
  declarations: [
    SelecionarProvasPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecionarProvasPage),
  ],
})
export class SelecionarProvasPageModule {}
