"use strict";

// Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos
var alunos = [{
  nome: "Ana",
  nota: 8
}, {
  nome: "Bruno",
  nota: 5
}, {
  nome: "Carlos",
  nota: 7
}, {
  nome: "Daniela",
  nota: 4
}, {
  nome: "Eduardo",
  nota: 10
}];

// Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6; não esqueca de utilziar o tratamento de erros
function filtrarAprovados(alunos) {
  // Verifica se o argumento é um array
  if (!Array.isArray(alunos)) {
    throw new Error("O argumento deve ser um array");
  }

  // Cria um novo array com os alunos aprovados
  var aprovados = alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });

  // Retorna o array de aprovados
  return aprovados;
}

// Testa a função com o array de alunos
console.log(filtrarAprovados(alunos));