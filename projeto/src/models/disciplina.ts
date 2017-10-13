import { Aluno } from './aluno';
import { Professor } from './professor';
import { Questao } from './questao';

export class Disciplina{
    nome: string;
    aluno: Aluno;
    professor:Professor;
    nota1: string;
    nota2: string;
    questao: Questao[];
}