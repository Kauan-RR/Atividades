// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
console.log(frutas[0], frutas[2]);
frutas[1] = 'abacaxi';
console.log(frutas[1])
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:

const newarrey = [letras1[0], letras1[2], letras1[5]];
console.log(newarrey)
const newarrey2 = [letras1[4], letras1[5]];
console.log(newarrey2);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.

const arreybatata = [letras2[1], letras2[0], letras2[5], letras2[0], letras2[5], letras2[0]];
console.log(arreybatata.join(''));


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
const pessoa = { nome: 'Junin', idade: 22, cidade: 'Porto Alegre' };
// a) Acesse e exiba a propriedade 'nome' e 'cidade'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' por atribuição direta.

// → Seu código aqui:

console.log(pessoa.nome, pessoa.cidade);
pessoa.curso = 'Prograação';
console.log(pessoa.curso);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfil = {
    usuario: 'ana123',
    dados: { nome: 'Ana', idade: 19 },
    interesses: ['música', 'fotografia', 'viagens']
};
// a) Acesse o nome dentro de 'dados' e o segundo interesse.
// b) Altere o primeiro interesse para 'arte' por atribuição direta.

// → Seu código aqui:

console.log(perfil.dados.nome, perfil.interesses[1]);
perfil.interesses[0] = 'arte';
console.log(perfil.interesses[0]);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo id, nome e preço.
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos e os valores são o nome
// e os valores são os objetos de produto correspondentes (sem usar loops ou funções).

// → Seu código aqui:

const produtos = [{ id: 1, nome: 'Camiseta', preco: 29.99 },
{ id: 2, nome: 'Calça', preco: 49.99 },
{ id: 3, nome: 'Tênis', preco: 89.99 }];

const catalogo = { 1: produtos[0], 2: produtos[1], 3: produtos[2] };
console.log(catalogo);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas

// → Seu código aqui:

const tarefas = [
    { id: 1, titulo: 'Estudar JavaScript', concluida: false },
    { id: 2, titulo: 'Fazer exercícios', concluida: false },
    { id: 3, titulo: 'Revisar conceitos', concluida: false }
];

tarefas[1].concluida = true;
console.log(tarefas);   
const tarefasNaoConcluidas = [tarefas[0], tarefas[2]];
console.log(tarefasNaoConcluidas);
console.log("_______________________________");