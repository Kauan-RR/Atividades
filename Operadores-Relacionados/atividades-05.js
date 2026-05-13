// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================
let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
let num1 = 10 == 10
let num2 = 10 === 10
console.log(`10 == 10 → ${num1}`)
console.log(`10 === 10 → ${num2}`)
let num3 = 10 == "10"
let num4 = 10 === "10"
console.log(`10 == "10" → ${num3}`)
console.log(`10 === "10" → ${num4}`)
let num5 = 0 == false
let num6 = 0 === false
console.log(`0 == false → ${num5}`)
console.log(`0 === false → ${num6}`)
let num7 = null == undefined
let num8 = null === undefined
console.log(`null == undefined → ${num7}`)
console.log(`null === undefined → ${num8}`)
let num9 = "JS" == "JS"
let num10 = "JS" === "JS"
console.log(`"JS" == "JS" → ${num9}`)
console.log(`"JS" === "JS" → ${num10}`)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

let num11 = 5 != 5
let num12 = 5 !== 5
console.log(`5 != 5 → ${num11}`)
console.log(`5 !== 5 → ${num12}`)
let num13 = 5 != "5"
let num14 = 5 !== "5"
console.log(`5 != "5" → ${num13}`)
console.log(`5 !== "5" → ${num14}`)
let num15 = 7 != 3
let num16 = 7 !== 3
console.log(`7 != 3 → ${num15}`)
console.log(`7 !== 3 → ${num16}`)
let num17 = true != 1
let num18 = true !== 1
console.log(`true != 1 → ${num17}`)
console.log(`true !== 1 → ${num18}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

let salarioA = 3500
let salarioB = 4200
let resultado1 = salarioA > salarioB
let resultado2 = salarioA < salarioB
let resultado3 = salarioA >= salarioB
let resultado4 = salarioA <= salarioB
let resultado5 = salarioA === salarioB

console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${resultado1 ? "Sim" : "Não"}`)
console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${resultado2 ? "Sim" : "Não"}`)
console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${resultado3 ? "Sim" : "Não"}`)
console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${resultado4 ? "Sim" : "Não"}`)
console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${resultado5 ? "Sim" : "Não"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
let estoque = 0
let temEstoque = estoque > 0
let estoqueZerado = estoque === 0
let temperatura = 36.5
let febre = temperatura >= 37.6
console.log(`Tem estoque? ${temEstoque ? "Sim" : "Não"}`)
console.log(`Estoque zerado? ${estoqueZerado ? "Sim" : "Não"}`)
console.log(`Temperatura: ${temperatura}°C`)
console.log(`Febre? ${febre ? "Sim" : "Não"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

const num116 = lerTeclado.questionFloat('Digite o primeiro número: ');
const num115 = lerTeclado.questionFloat('Digite o segundo número: ');
const comparacao1 = num116 > num115
const comparacao2 = num116 < num115
const comparacao3 = num116 === num115
const comparacao4 = num116 >= num115
console.log(`Número 1: ${num116}`)
console.log(`Número 2: ${num115}`)
console.log(`num116 > num115: ${comparacao1 ? "Sim" : "Não"}`)
console.log(`num116 < num115: ${comparacao2 ? "Sim" : "Não"}`)
console.log(`num116 === num115: ${comparacao3 ? "Sim" : "Não"}`)
console.log(`num116 >= num115: ${comparacao4 ? "Sim" : "Não"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

let preco = lerTeclado.questionFloat('Digite o preço do produto: R$ ');
const precoMaximo = 100;
let estaDentroDoOrcamento = preco <= precoMaximo;
let esteItemEhCaro = preco > precoMaximo;
console.log(`Preço informado: R$ ${preco}`);
console.log(`Dentro do orçamento (≤ R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? "Sim" : "Não"}`);
console.log(`Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
let cadastro = []
const nomePessoa1 = lerTeclado.question('Digite o nome da primeira pessoa: ');
const idadePessoa1 = lerTeclado.questionInt('Digite a idade da primeira pessoa: ');
const nomePessoa2 = lerTeclado.question('Digite o nome da segunda pessoa: ');
const idadePessoa2 = lerTeclado.questionInt('Digite a idade da segunda pessoa: ');
cadastro.push({ nome: nomePessoa1, idade: idadePessoa1 });
cadastro.push({ nome: nomePessoa2, idade: idadePessoa2 });
let comparacao5 = idadePessoa1 > idadePessoa2
let comparacao6 = idadePessoa1 === idadePessoa2
let comparacao7 = idadePessoa1 >= 18
let comparacao8 = idadePessoa2 >= 18
console.log(`Idade da ${nomePessoa1} é ${idadePessoa1} e ela é ${comparacao7 ? "maior de idade" : "menor de idade"}.`)
console.log(`Idade da ${nomePessoa2} é ${idadePessoa2} e ela é ${comparacao8 ? "maior de idade" : "menor de idade"}.`)
console.log(`${comparacao5 ? nomePessoa1 : comparacao6 ? "Ambos têm a mesma idade" : nomePessoa2} é mais velho(a).`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

let alunos = []
const nomeAluno1 = lerTeclado.question('Digite o nome do primeiro aluno: ');
const nota1aluno1 = lerTeclado.questionFloat('Digite a primeira nota do primeiro aluno: ');
const nota2aluno1 = lerTeclado.questionFloat('Digite a segunda nota do primeiro aluno: ');
const nota3aluno1 = lerTeclado.questionFloat('Digite a terceira nota do primeiro aluno: ');
const nomeAluno2 = lerTeclado.question('Digite o nome do segundo aluno: ');
const nota1aluno2 = lerTeclado.questionFloat('Digite a primeira nota do segundo aluno: ');
const nota2aluno2 = lerTeclado.questionFloat('Digite a segunda nota do segundo aluno: ');
const nota3aluno2 = lerTeclado.questionFloat('Digite a terceira nota do segundo aluno: ');
alunos.push({ nome: nomeAluno1, notas: [nota1aluno1, nota2aluno1, nota3aluno1] });
alunos.push({ nome: nomeAluno2, notas: [nota1aluno2, nota2aluno2, nota3aluno2] });
let mediaAluno1 = (nota1aluno1 + nota2aluno1 + nota3aluno1) / 3
let mediaAluno2 = (nota1aluno2 + nota2aluno2 + nota3aluno2) / 3
console.log(`Média do ${nomeAluno1}: ${mediaAluno1.toFixed(2)}`)
console.log(`Média do ${nomeAluno2}: ${mediaAluno2.toFixed(2)}`)
console.log(`Aluno com maior média: ${mediaAluno1 > mediaAluno2 ? nomeAluno1 : mediaAluno1 < mediaAluno2 ? nomeAluno2 : "Ambos têm a mesma média"}`)
console.log(`Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nota1aluno1 < nota1aluno2 ? nomeAluno2 : "Ambos têm a mesma primeira nota"}`)
console.log(`Aluno com segunda maior nota: ${nota2aluno1 > nota2aluno2 ? nomeAluno1 : nota2aluno1 < nota2aluno2 ? nomeAluno2 : "Ambos têm a mesma segunda nota"}`)
console.log(`Aluno com terceira maior nota: ${nota3aluno1 > nota3aluno2 ? nomeAluno1 : nota3aluno1 < nota3aluno2 ? nomeAluno2 : "Ambos têm a mesma terceira nota"}`)



console.log("_______________________________");