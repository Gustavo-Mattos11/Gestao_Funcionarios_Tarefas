"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sistema_1 = require("./Sistema");
var sistema = new Sistema_1.Sistema();
var gustavo = sistema.cadastrarFuncionario("Gustavo", 2000);
var julia = sistema.cadastrarFuncionario('Julia', 2000);
var vitoria = sistema.cadastrarFuncionario('Vitoria', 2300);
sistema.criarTarefa('varrer a casa', 'varrer quarto, sala e cozinha', gustavo, true);
sistema.criarTarefa('limpar o quarto', 'organizar mesa, arrumar a cama, dobrar roupas', vitoria);
console.log(sistema.apresentar());
