import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoHistoricoPage } from './aluno-historico';
import { Professor} from './../../models/professor'
import { AlunoProvider } from "./../../providers/aluno/aluno";
import {  } from "./../../models";
@NgModule({
  declarations: [
    AlunoHistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoHistoricoPage),
  ],
})
export class AlunoHistoricoPageModule {}
