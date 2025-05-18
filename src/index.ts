
import { Sistema } from "./Sistema"

const sistema = new Sistema()
const gustavo = sistema.cadastrarFuncionario("Gustavo", 2000)
const julia = sistema.cadastrarFuncionario('Julia', 2000)
const vitoria = sistema.cadastrarFuncionario('Vitoria', 2300)


sistema.criarTarefa('varrer a casa', 'varrer quarto, sala e cozinha', gustavo, true)
sistema.criarTarefa('limpar o quarto', 'organizar mesa, arrumar a cama, dobrar roupas', vitoria)
console.log(sistema.apresentar())