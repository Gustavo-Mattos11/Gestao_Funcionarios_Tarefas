import { Funcionario } from './Funcionario'

class Designer extends Funcionario{
    ferramenta: string;

    constructor(nome: string, salario: number, ferramenta: string){
        super(nome, salario)
        this.ferramenta = ferramenta

    }
    apresentar(): string {
        return `Olá, me chamo ${this.nome}, meu salário é de ${this.salario} e utilizo ${this.ferramenta}`
    }
    desenhar(): string{
        return `Estou desenhando`
    }
}