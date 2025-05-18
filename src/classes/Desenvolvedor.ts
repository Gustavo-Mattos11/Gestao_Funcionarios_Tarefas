import { Funcionario } from "./Funcionario";

class Desenvolvedor extends Funcionario{
    linguagem: string;
    constructor(nome: string, salario: number, linguagem: string){
        super(nome, salario)
        this.linguagem = linguagem
    }

    apresentar(): string {
        return `Olá, me chamo ${this.nome}, recebo ${this.salario} e utilizo a linguagem ${this.linguagem}`
    }
    
    programar(): string{
        return `Estou programando`
    }
}