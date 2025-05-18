import { Funcionario } from "./Funcionario";

export class Tarefa{
    titulo: string
    descricao: string;
    concluida: boolean;
    responsavel: Funcionario

    constructor(titulo: string, descricao: string, responsavel: Funcionario, concluida: boolean){
        this.titulo = titulo
        this.descricao = descricao
        this.responsavel = responsavel
        this.concluida = concluida
    }

    alternarStatus(): void{
        this.concluida = !this.concluida
    }
}