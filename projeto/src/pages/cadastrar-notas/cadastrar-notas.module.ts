import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarNotasPage } from './cadastrar-notas';

@NgModule({
  declarations: [
    CadastrarNotasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarNotasPage),
  ],
})
export class CadastrarNotasPageModule {}
