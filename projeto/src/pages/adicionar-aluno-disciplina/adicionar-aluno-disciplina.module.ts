import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarAlunoDisciplinaPage } from './adicionar-aluno-disciplina';

@NgModule({
  declarations: [
    AdicionarAlunoDisciplinaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarAlunoDisciplinaPage),
  ],
})
export class AdicionarAlunoDisciplinaPageModule {}
