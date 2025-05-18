"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistema = void 0;
var Funcionario_1 = require("./classes/Funcionario");
var Tarefa_1 = require("./classes/Tarefa");
var Sistema = /** @class */ (function () {
    function Sistema() {
        this.funcionarios = [];
        this.tarefas = [];
    }
    Sistema.prototype.cadastrarFuncionario = function (nome, salario) {
        var funcionario = new Funcionario_1.Funcionario(nome, salario);
        this.funcionarios.push(funcionario);
        return funcionario;
    };
    Sistema.prototype.criarTarefa = function (titulo, descricao, responsavel, concluida) {
        if (concluida === void 0) { concluida = false; }
        var funcionarioExiste = this.funcionarios.some(function (f) { return f === responsavel; });
        if (!funcionarioExiste) {
            throw new Error("Funcionário não cadastrado no sistema. ");
        }
        var tarefa = new Tarefa_1.Tarefa(titulo, descricao, responsavel, concluida);
        this.tarefas.push(tarefa);
        return tarefa;
    };
    Sistema.prototype.apresentar = function () {
        return this.tarefas;
    };
    return Sistema;
}());
exports.Sistema = Sistema;
