// ============================================================
//   ATIVIDADE 02 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

const pessoa = {

    aluno: {

name:  "Kauan",

idade: 21,},

curso:  "Desenvolvimento de sistemas"

}

console.log(pessoa.name)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:

pessoa.endereço = ["cidade:Penha", "rua:joão de freitas"];
console.log(pessoa);
console.log(pessoa.endereço[0])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

pessoa.habilidades = ["aritimetica", "javascript"]
console.log(pessoa)
console.log(pessoa.habilidades[0])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

pessoa.notas = [10,90,10,70]
console.log(pessoa)
console.log(`${pessoa.aluno.name} ${pessoa.notas} `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:

pessoa.responsavel = ["Mãe: Priscila, Pai:Fabio"];
console.log(pessoa)
pessoa.responsavel = ["Mãe: Priscila"];//Foi retirado o pai da lista
console.log(pessoa)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:

const listaDeAlunos = ["lista de alunos"];
  
  listaDeAlunos.push(pessoa.aluno, {name:pedro
idade:10
notas:10, 9, 10}
 );
  
  console.log(listaDeAlunos);

 
console.log("_______________________________");
