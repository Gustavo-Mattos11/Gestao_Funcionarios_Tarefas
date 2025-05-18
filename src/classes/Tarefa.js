"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
var Tarefa = /** @class */ (function () {
    function Tarefa(titulo, descricao, responsavel, concluida) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.concluida = concluida;
    }
    Tarefa.prototype.alternarStatus = function () {
        this.concluida = !this.concluida;
    };
    return Tarefa;
}());
exports.Tarefa = Tarefa;
