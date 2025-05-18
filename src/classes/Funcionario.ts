import { IApresentavel } from "../interfaces/IApresentavel"

export class Funcionario implements IApresentavel{
    nome: string;
    salario: number;
    constructor(nome: string, salario: number){
        this.nome = nome
        this.salario = salario
    }
    apresentar(){
        return `Olá, meu nome é ${this.nome} e recebo ${this.salario}`
    }
}