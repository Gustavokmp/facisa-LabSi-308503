import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoLogadoPage } from './aluno-logado';

@NgModule({
  declarations: [
    AlunoLogadoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoLogadoPage),
  ],
})
export class AlunoLogadoPageModule {}
