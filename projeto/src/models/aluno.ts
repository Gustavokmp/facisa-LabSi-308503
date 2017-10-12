import { Pessoa } from './pessoa';
import { Disciplina } from './disciplina';

export class Aluno extends Pessoa{
    nota: number;
    disciplina: Disciplina;
}