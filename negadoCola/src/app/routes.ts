import { GeraProvaComponent } from './gera-prova/gera-prova.component';
import { HistoricoProfessorComponent } from './historico-professor/historico-professor.component';
import { CadastraTurmaComponent } from './cadastra-turma/cadastra-turma.component';
import { CadastraProvaComponent } from './cadastra-prova/cadastra-prova.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessorComponent } from './professor/professor.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const appRoutes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'professor', component: ProfessorComponent },
    { path: 'aluno', component: AlunoComponent },
    { path: 'cadastraProva', component: CadastraProvaComponent },
    { path: 'cadastraTurma', component: CadastraTurmaComponent },
    { path: 'historicoProfessor', component: HistoricoProfessorComponent },
    { path: 'geraProva', component: GeraProvaComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];