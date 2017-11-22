
import { Prova } from './prova';
import { Questao } from './questao';

export class Disciplina{
    nome: string;
    uidAluno = [];
    uidProfessor;
    nota1: string;
    nota2: string;
    questao: Questao[];
    prova1: Prova;
    prova2: Prova;
}