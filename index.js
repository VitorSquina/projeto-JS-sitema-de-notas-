import { Aluno } from "./aluno.js";
import { Notas } from "./notas.js";




const aluno1 = new Aluno("Vitor", "7");
const notasAluno1 = new Notas(10, 10, 10, 10, 10, 8)
// notasAluno1.Somar(10);
let lista = [];
var Ciencias = 10;
notasAluno1.adicionarNovaMateria("Ciencias", 10);
lista.push(notasAluno1.mat, notasAluno1.port, notasAluno1.hist, notasAluno1.filo, notasAluno1.ing, notasAluno1.soci);
console.log(lista);

console.log(notasAluno1);
console.log(notasAluno1.soma)
console.log(aluno1);
