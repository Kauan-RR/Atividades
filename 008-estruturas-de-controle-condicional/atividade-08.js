// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Switch simples com número
// ------------------------------------------------------------
// a) Declare "planeta" com valor 3.
// b) Usando switch/case, exiba o nome do planeta do Sistema Solar
//    correspondente ao número (1 = Mercúrio , 2 = Vênus,
//    3 = Terra, 4 = Marte, 5 = Júpiter, 6 = Saturno,
//    7 = Urano, 8 = Netuno).
// c) No default, exiba: "Planeta não encontrado."

// → Seu código aqui:

// let planeta = 3
// switch (planeta) {
//     case 1:
//         console.log("Mercúrio")
//         break;
//     case 2:
//         console.log("Vênus")
//         break;
//     case 3:
//         console.log("Terra")
//         break;
//     case 4:
//         console.log("Marte")
//         break;
//     case 5:
//         console.log("Júpiter")
//         break;
//     case 6:
//         console.log("Saturno")
//         break;
//     case 7:
//         console.log("Urano")
//         break;
//     case 8:
//         console.log("Netuno")
//         break;
//     default:
//         console.log("Erro!! informe um número correspondente as planetas")
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Switch com string
// ------------------------------------------------------------
// a) Declare "direcao" com valor "norte".
// b) Usando switch/case, exiba a mensagem correspondente:
//    - "norte"  → "Seguindo para o Norte ↑"
//    - "sul"    → "Seguindo para o Sul ↓"
//    - "leste"  → "Seguindo para o Leste →"
//    - "oeste"  → "Seguindo para o Oeste ←"
//    - default  → "Direção desconhecida."

// → Seu código aqui:

// let direcao = "norte"
// switch (direcao) {
//     case "norte":
//         console.log("Seguindo para o Norte ↑")
//         break;
//     case "sul":
//         console.log("Seguindo para o Sul ↓")
//         break;
//     case "leste":
//         console.log("Seguindo para o Leste →")
//         break;
//     case "oeste":
//         console.log("Seguindo para o Oeste ←")
//         break;
//     default:
//         console.log("Direção desconhecida.")
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Fall-through(cascata) intencional
// ------------------------------------------------------------
// a) Declare "tipoVeiculo" com valor "moto".
// b) Usando fall-through (cases sem break), classifique:
//    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
//    - "caminhao" ou "onibus"             → "Veículo pesado"
//    - default                            → "Tipo desconhecido."
// c) Exiba a categoria com template literal.

// → Seu código aqui:

// let tipoVeiculo = "moto"
// switch (tipoVeiculo) {
//     case "bicicleta":
//     case "moto":
//     case "carro":
//         console.log("Veículo leve")
//         break;
//     case "caminhao":
//     case "onibus":
//         console.log("Veículo pesado")
//         break;
//     default:
//         console.log("Tipo desconhecido.")
// };
// console.log(tipoVeiculo);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Switch com input (número)
// ------------------------------------------------------------
// a) Exiba o menu de turnos para o usuário:
//    1 – Manhã | 2 – Tarde | 3 – Noite
// b) Peça ao usuário que escolha um turno (questionInt()).
// c) Com switch/case, exiba a saudação correspondente:
//    - 1 → "Bom dia! Turno da manhã."
//    - 2 → "Boa tarde! Turno da tarde."
//    - 3 → "Boa noite! Turno da noite."
//    - default → "Opção inválida."

// → Seu código aqui:

// const turnos = {
//     1: "manhã",
//     2: "tarde",
//     3: "noite"
// }
// console.table(turnos);
// usuario = lerTeclado.questionInt("Escolha um turno:");
// switch (usuario) {
//     case 1:
//         console.log("Bom dia! Turno da manhã.")
//         break;
//     case 2:
//         console.log("Boa tarde! Turno da tarde.")
//         break;
//     case 3:
//         console.log("Boa noite! Turno da noite.")
//     default:
//         console.log("Opção inválida.")
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Switch com input (string)
// ------------------------------------------------------------
// a) Pergunte ao usuário qual é a estação do ano favorita dele
//    (question()): "verao", "outono", "inverno" ou "primavera".
// b) Com switch/case, exiba uma descrição curta da estação:
//    - "verao"     → "Dias quentes e férias!"
//    - "outono"    → "Folhas caindo e temperaturas amenas."
//    - "inverno"   → "Frio, cobertores e chocolate quente."
//    - "primavera" → "Flores, calor e renovação."
//    - default     → "Estação não reconhecida."

// → Seu código aqui:

// usuario = lerTeclado.question("Qual dessas destas estações e sua preferida?: verao, outono, inverno ou primavera. ");
// switch (usuario) {
//     case "verao":
//         console.log("Dias quentes e férias!")
//         break;
//     case "outono":
//         console.log("Folhas caindo e temperaturas amenas.")
//         break;
//     case "inverno":
//         console.log("Frio, cobertores e chocolate quente.")
//         break;
//     case "primavera":
//         console.log("Flores, calor e renovação.")
//         break;
//     default:
//         console.log("Estação não reconhecida.")
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Dias da semana com fall-through
// ------------------------------------------------------------
// a) Pergunte ao usuário um número de 1 a 7 (questionInt()).
// b) Usando fall-through intencional:
//    - 1 a 5  → exiba: "Dia útil"
//    - 6 ou 7 → exiba: "Final de semana"
//    - default → "Número inválido"

// usuario = lerTeclado.questionInt("Digite um número de 1 a 7: ");
// switch (usuario) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Dia útil")
//         break;
//     case 6:
//     case 7:
//         console.log("Final de semana")
//         break;
//     default:
//         console.log("Número inválido")

// }


// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Switch com objeto
// ------------------------------------------------------------
// a) Crie um objeto "produto" com as propriedades, perguntando ao usuário:
//    - nome
//    - categoria: número de 1 a 4 | 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro
//    - preco
// b) Com switch/case na categoria:
//    - 1 → adicione ao objeto: descricaoCategoria: "Eletrônico" e garantia: "12 meses"
//    - 2 → adicione ao objeto: descricaoCategoria: "Vestuário" e garantia: "Troca em 30 dias"
//    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
//    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
//    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria inválida."
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// const produto = {
//     nome: lerTeclado.question("Nome do produto: "),
//     categoria: lerTeclado.questionInt("Digite um numero de 1 a 4 para a categoria do produto: 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro :"),
//     preço: lerTeclado.questionFloat("Digite o preço: ")

// };
// switch (produto.categoria) {
//     case 1:
//         produto.descricaoCategoria = "Eletrônico"
//         produto.garantia = "12 meses"
//         break;
//     case 2:
//         produto.descricaoCategoria = "Vestuário"
//         produto.garantia = "Troca em 30 dias"
//         break;
//     case 3:
//         produto.descricaoCategoria = "Alimento"
//         produto.garantia = "Ver validade"
//         break;
//     case 4:
//         produto.descricaoCategoria = "Livro"
//         produto.garantia = "Sem garantia"
//         break;
//     default:
//         produto.descricaoCategoria = "Categoria invalida"
//         produto.garantia = "Sem garantia"
// }
// console.table(produto);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Conversor de nota para conceito e cor
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome
//    - Nota de 0 a 10 (questionInt()).
// b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
//    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
//    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
//    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
//    - 4 ou 3   → conceito: "D", mensagem: "Em recuperação."
//    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
//    - default  → "Nota inválida."
// c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"

// → Seu código aqui:

// let nome = lerTeclado.question("Digite seu nome:")
// const nota = {
//     nota1: lerTeclado.questionInt("Digite sua nota de 0 a 10:")
// }
// switch (nota.nota1) {
//     case 10:
//     case 9:
//         nota.conceito = "A"
//         nota.mensagem = "Excelente!"
//         break;
//     case 8:
//     case 7:
//         nota.conceito = "B"
//         nota.mensagem = "Muito bom!"
//         break;
//     case 6:
//     case 5:
//         nota.conceito = "C"
//         nota.mensagem = "Suficiente."
//         break;
//     case 4:
//     case 3:
//         nota.conceito = "D"
//         nota.mensagem = "Em recuperação."
//         break;
//     case 2:
//     case 1:
//     case 0:
//         nota.conceito = "F"
//         nota.mensagem = "Reprovado."
//         break;
//     default:
//         "Nota invalida"
// }
// console.log(`${nome} - ${nota.nota1} | Conceito:${nota.conceito} | ${nota.mensagem}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Calculadora com switch
// ------------------------------------------------------------
// a) Pergunte ao usuário dois números (questionFloat()).
// b) Exiba o menu de operações:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto
// c) Peça ao usuário que escolha uma operação (questionInt()).
// d) Com switch/case, calcule e exiba o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Se a operação for 4 (divisão) e o divisor for 0, exiba:
//    "Erro: divisão por zero não é permitida."
//    No default, exiba: "Operação inválida."

// → Seu código aqui:

// let number1 = lerTeclado.questionFloat("Digite um numero:");
// let number2 = lerTeclado.questionFloat("Digite um numero:");
// const operações = {
//     1: "Soma",
//     2: "Subtração",
//     3: "Multiplicação",
//     4: "Divisão",
//     5: "Resto"
// };
// console.table(operações);
// let operação = lerTeclado.questionInt("Escolha uma operação: ")
// switch (operação) {
//     case 1:
//         console.log(number1 + number2);
//         break;
//     case 2:
//         console.log(number1 - number2);
//         break;
//     case 3:
//         console.log(number1 * number2);
//         break;
//     case 4:
//         if (number2 === 0) {
//             console.log("Erro: divisão por zero não é permitida.");

//         } else {
//             console.log(number1 / number2);
//         }
//         break;
//     case 5:
//         console.log(number1 % number2);
//         break;
//     default:
//         console.log("operação invalida");
// };


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de loja completo
// ------------------------------------------------------------
// a) Crie um objeto "loja" com:
//    - nome: "TechShop"
//    - saldo: 0
// b) Exiba o menu:
//    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
// c) Peça ao usuário uma opção (questionInt()).
// d) Com switch/case:
//    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
//          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
//    - 2 → pergunte qual produto e o preço (question + questionFloat),
//          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
//    - 3 → exiba: "Total no carrinho: R$ <saldo>"
//    - 4 → exiba: "Obrigado por visitar a TechShop!"
//    - default → exiba: "Opção inválida."

// → Seu código aqui:

// const loja = {
//     nome: "TechShop",
//     saldo: 0
// };
// const menu = {
//     1: "Ver produtos",
//     2: "Comprar",
//     3: "Ver carrinho",
//     4: "Sair"
// };
// console.table(menu);
// let opção = lerTeclado.questionInt("Escolha uma opção: ");
// switch (opção) {
//     case 1:
//         const produtos = [
//             { produto: "Alienigina", preco: 100000 },
//             { produto: "Nave espacial", preco: 500000 },
//             { produto: "Laser", preco: 250000 }
//         ];
//         console.table(produtos);
//         break;

//     case 2:
//         let produto = lerTeclado.question("Qual o nome do produto? ");
//         let preco = lerTeclado.questionFloat("Qual o preço do produto? ");
//         loja.saldo += preco;
//         console.log("Produto adicionado ao carrinho.");
//         break;

//     case 3:
//         console.log(`Total no carrinho: R$ ${loja.saldo.toFixed(2)}`);
//         break;

//     case 4:
//         console.log("Obrigado por visitar a TechShop!");
//         break;


//     default:
//         console.log("Opção inválida.");
// }

console.log("_______________________________");