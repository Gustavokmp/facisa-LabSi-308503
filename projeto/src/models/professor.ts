import { Aluno } from './aluno';
import { Disciplina } from './disciplina';
import { Pessoa } from './pessoa';

export class Professor extends Pessoa{
    disciplina: Disciplina;
    alunos:Aluno[];
}