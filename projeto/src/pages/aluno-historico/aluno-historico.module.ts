import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoHistoricoPage } from './aluno-historico';
import { Professor} from './../../models/professor'
@NgModule({
  declarations: [
    AlunoHistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoHistoricoPage),
  ],
})
export class AlunoHistoricoPageModule {}
