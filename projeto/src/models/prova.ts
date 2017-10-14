import { Aluno } from './aluno';
import { Professor } from './professor';
import { Questao } from './questao';

export class Prova{
    idDisciplina;
    professor;
    nota: string;
    questao = [];
    estagio:number;
}