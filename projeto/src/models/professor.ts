import { Aluno } from './aluno';
import { Disciplina } from './disciplina';
import { Pessoa } from './pessoa';

export class Professor{
    disciplina: Disciplina[];
    alunos:Aluno[];
    pessoa:Pessoa;
    uid;
}