import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { appRoutes } from "./routes";
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';
import { FormsModule } from '@angular/forms';
import { MenuProfessorComponent } from './menu-professor/menu-professor.component';
import { CadastraProvaComponent } from './cadastra-prova/cadastra-prova.component';
import { HistoricoProfessorComponent } from './historico-professor/historico-professor.component';
import { CadastraTurmaComponent } from './cadastra-turma/cadastra-turma.component';
import { GeraProvaComponent } from './gera-prova/gera-prova.component';
import { MenuAlunoComponent } from './menu-aluno/menu-aluno.component';
import { RealizarProvaComponent } from './realizar-prova/realizar-prova.component';
import { HistoricoAlunoComponent } from './historico-aluno/historico-aluno.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfessorComponent,
    AlunoComponent,
    MenuProfessorComponent,
    CadastraProvaComponent,
    HistoricoProfessorComponent,
    CadastraTurmaComponent,
    GeraProvaComponent,
    MenuAlunoComponent,
    RealizarProvaComponent,
    HistoricoAlunoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
