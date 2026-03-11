// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:


import { question, questionInt, keyInYN } from 'readline-sync';

console.log('iniciando o programa');
console.info('atividade de hoje e sobre imput');
console.warn('eu devo sempre iniciar com "node e o nome do arquivo"');
console.error('cuidado para não errar o codigo');


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:

const nameUser = question('Digite seu nome:');
const idadeUser = questionInt('idade:');
console.log(`Olá, ${nameUser}, Você tem ${idadeUser} anos`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

const cidade = question('cidade:');

const ficha = [
    { name: 'kauan', idade: 21, cidade: 'curitiba' },]

console.table(ficha);





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:

const Perguntas = keyInYN("Você gosta de programar ?");
const Perguntas1 = keyInYN("você comeu hoje ?");

console.log(`${Perguntas ? 'Gosta' : 'não Gosta'}, de programar e`, `${Perguntas1 ? 'comeu' : 'não comeu'} hoje`)





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

const comidas = [];
comidas[0] = question("qual sua comida preferida ?"), comidas[1] = question("qaual a sua comida preferida ?"), comidas[2] = question("qaual a sua comida preferida ?")

let comidaspreferidas = [comidas[0], comidas[1], comidas[2]];
console.table(comidaspreferidas);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

const profissão = question('digite sua profissao:');
const name = question("Digite seu nome:");
const cidade1 = question("diga sua cidade:");
let cadastropessoal = [name, profissão, cidade1];

console.log(`Me chamo ${cadastropessoal[0]}. Profissão: ${cadastropessoal[1]} e moro na cidade de: ${cadastropessoal[2]} `);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

const Usuario = [];
Usuario[0] = { nome: question("digite seu nome:"), idade: questionInt("digite sua idade:"), enderenço: { cidade: question("digite sua cidade:"), rua: question("digite sua rua:"), numero: questionInt("digite o numero da sua casa:") } };
Usuario[1] = { nome: question("digite seu nome:"), idade: questionInt("digite sua idade:"), enderenço: { cidade: question("digite sua cidade:"), rua: question("digite sua rua:"), numero: questionInt("digite o numero da sua casa:") } };
Usuario[2] = { nome: question("digite seu nome:"), idade: questionInt("digite sua idade:"), enderenço: { cidade: question("digite sua cidade:"), rua: question("digite sua rua:"), numero: questionInt("digite o numero da sua casa:") } };

const Usuarios = [Usuario[0], Usuario[1], Usuario[2]];
const listaDeUsuarios = Usuarios;
console.table(listaDeUsuarios);
console.log(Usuario[1].name, Usuario[1].idade);
console.log(Usuario[2].enderenço);
console.log(Usuario[0].nome, Usuario[0].enderenço.rua);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:

const alunos = [];
alunos[0] = { nome: question("digite o nome do aluno:"), notas: [questionInt("digite a primeira nota:"), questionInt("digite a segunda nota:"), questionInt("digite a terceira nota:")] };
alunos[1] = { nome: question("digite o nome do aluno:"), notas: [questionInt("digite a primeira nota:"), questionInt("digite a segunda nota:"), questionInt("digite a terceira nota:")] };
alunos[2] = { nome: question("digite o nome do aluno:"), notas: [questionInt("digite a primeira nota:"), questionInt("digite a segunda nota:"), questionInt("digite a terceira nota:")] };
const turma = [alunos[0], alunos[1], alunos[2]];
console.table(turma)
console.log(alunos[1].nome, alunos[1].notas[0]);
console.log(alunos[2].nome, alunos[2].notas[1]);
console.log(alunos[0].nome, alunos[0].notas[2]);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:

const nomeProduto = question("digite o nome do produto:");
const categoriaProduto = question("digite a categoria do produto:");
const preçoProduto = questionInt("digite o preço do produto:");
const quantidadeProduto = questionInt("digite a quantidade em estoque:");
const disponivelProduto = keyInYN("o produto esta disponivel para venda ?");
const produto = { nome: nomeProduto, categoria: categoriaProduto, preço: preçoProduto, quantidade: quantidadeProduto, disponivel: disponivelProduto };
console.table(produto);
console.log(`Produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.quantidade} un`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// → Seu código aqui:

const medicamentos = []
medicamentos[0] = { nome: question("digite o nome do mmedicamento:"), preco: questionInt("digite o preço do medicamento:"), emEstoque: keyInYN("o medicamento esta em estoque ?") };
medicamentos[1] = { nome: question("digite o nome do mmedicamento:"), preco: questionInt("digite o preço do medicamento:"), emEstoque: keyInYN("o medicamento esta em estoque ?") };
const estoqueFarmacia = [];
estoqueFarmacia.push(medicamentos[0], medicamentos[1]);
console.table(estoqueFarmacia);
console.log(medicamentos[1].nome, medicamentos[1].preco);
console.log(medicamentos[0].nome, medicamentos[0].emEstoque ? "em estoque" : "não em estoque");