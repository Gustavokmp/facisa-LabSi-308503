
import { Prova } from './prova';
import { Questao } from './questao';
import { Historico } from './historico';

export class Disciplina{
    nome: string;
    uidAluno = [];
    uidProfessor;
    nota1: string;
    nota2: string;
    questao: Questao[];
    prova1: Prova;
    prova2: Prova;
    historico:Historico;
}