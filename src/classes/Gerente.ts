import { Funcionario } from "./Funcionario"

class Gerente extends Funcionario{
    departamento: string;
    constructor(nome: string, salario: number, departamento: string){
        super(nome, salario)
        this.departamento = departamento
    }
    apresentar(): string {
        return `Olá, me chamo ${this.nome}, recebo ${this.salario} e trabalho no departamento ${this.departamento}`
    }
    gerenciar(): string{
        return `Gerenciando...`
    }
}