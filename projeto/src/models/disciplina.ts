import { Questao } from './questao';

import { Prova } from './prova';
import { Professor } from './professor';
import { Aluno } from './aluno';
export class Disciplina{
    keyReference:string;
    nome: string;
    aluno: Aluno;
    professor:Professor;
    prova:Prova;
    questao: Questao;
}