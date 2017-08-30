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
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];