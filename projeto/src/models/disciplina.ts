import { Questao } from './questao';
import { Professor } from './professor';
import { Aluno } from './aluno';
export class Disciplina{
    keyReference:string;
    nome: string;
    aluno: Aluno;
    professor:Professor;
    nota1: string;
    nota2: string;
    questao: Questao;
}