import { Funcionario } from "./classes/Funcionario"
import { Tarefa } from "./classes/Tarefa"
export class Sistema{
    funcionarios: Funcionario[] = []
    tarefas: Tarefa[] = []

    cadastrarFuncionario(nome: string, salario: number): Funcionario{
        const funcionario = new Funcionario(nome, salario)
        this.funcionarios.push(funcionario)

        return funcionario
    }

    criarTarefa(titulo: string, descricao: string, responsavel: Funcionario, concluida: boolean = false): Tarefa{
        let funcionarioExiste = this.funcionarios.some(f => f === responsavel)
        if(!funcionarioExiste){
            throw new Error("Funcionário não cadastrado no sistema. ");
        }

        const tarefa = new Tarefa(titulo, descricao, responsavel, concluida)
        this.tarefas.push(tarefa)
        return tarefa
    }
    apresentar(): Tarefa[]{
        return this.tarefas
    }
}

