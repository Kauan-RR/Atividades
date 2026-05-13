// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let lerteclado = require("readline-sync");
// // ------------------------------------------------------------
// // DESAFIO 1 – Progressão de saldo bancário
// // ------------------------------------------------------------
// // Um investimento rende juros compostos mensais.
// //
// // a) Pergunte ao usuário:
// //    - Saldo inicial (questionFloat())
// //    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
// //    - Número de meses
// // b) Usando um for, calcule e exiba mês a mês:
// //    "Mês 1:  R$ <saldo>"
// //    "Mês 2:  R$ <saldo>"
// //    ...
// //    A fórmula de juros compostos é:
// //    saldo = saldo * (1 + taxa / 100)
// // c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// // d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// // → Seu código aqui:

// let usuario = {
//     usuario1: lerteclado.question("Digite o nome do usuário: "),
//     saldoInicial: lerteclado.questionFloat("Digite o saldo inicial: R$ "),
//     taxaJuros: lerteclado.questionFloat("Digite a taxa de juros mensal (%): "),
//     meses: lerteclado.questionInt("Digite o número de meses: ")
// };
// for (let i = 1; i <= usuario.meses; i++) {
//     usuario.saldoInicial = usuario.saldoInicial * (1 + usuario.taxaJuros / 100);
//     console.log(`Mês ${i}: R$ ${usuario.saldoInicial.toFixed(2)}`);
// }
// console.table(usuario);


// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:
// let quantidadeAlunos = lerteclado.questionInt("Quantos alunos serão cadastrados? ");
// let alunos = [];

// for (let i = 1; i <= quantidadeAlunos; i++) {
//     let nome = lerteclado.question(`Digite o nome do aluno ${i}: `);
//     let nota1 = lerteclado.questionFloat(`Digite a nota 1 do aluno ${i}: `);
//     let nota2 = lerteclado.questionFloat(`Digite a nota 2 do aluno ${i}: `);
//     let nota3 = lerteclado.questionFloat(`Digite a nota 3 do aluno ${i}: `);

//     let media = (nota1 + nota2 + nota3) / 3;
//     let situacao = "";
//     if (media >= 7) {
//         situacao = "Aprovado";
//     } else if (media >= 5) {
//         situacao = "Recuperação";
//     } else {
//         situacao = "Reprovado";
//     }
//     alunos.push({ nome, notas: [nota1, nota2, nota3], media: media.toFixed(2), situacao });
// }

// console.table(alunos);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:
// Importando a biblioteca de leitura do teclado (necessário ter o readline-sync instalado)

// let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativasUsadas = 0;
// let acertou = false;

// for (let i = 1; i <= 7; i++) {
//     tentativasUsadas = i;

//     let palpite = lerteclado.questionInt(`Tentativa ${i} - Digite seu palpite (1-100): `);

//     if (palpite === numeroSecreto) {
//         console.log(`Parabéns! Acertou em ${i} tentativa(s)!`);
//         acertou = true;
//         break;
//     } else if (palpite > numeroSecreto) {
//         console.log("Muito alto!");
//     } else {
//         console.log("Muito baixo!");
//     }

//     if (i < 7) {
//         console.log(`Tentativas restantes: ${7 - i}\n`);
//     } else {
//         console.log(`Game over! O número era ${numeroSecreto}.\n`);
//     }
// }

// console.log("--- Resumo ---");
// console.log(`Número secreto: ${numeroSecreto}`);
// console.log(`Número de tentativas usadas: ${tentativasUsadas}`);
// console.log(`Resultado: ${acertou ? "Vitória 🏆" : "Derrota 💀"}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:
let vendas = [12500, 9800, 15200, 11000, 13750, 8900,
    17300, 14600, 10200, 16800, 19500, 22000];

let totalVendas = 0;
for (let i = 0; i < vendas.length; i++) {
    totalVendas += vendas[i];
}
let mediaMensal = totalVendas / vendas.length;

let mesMaiorVenda = 0;
let maiorVenda = vendas[0];
for (let i = 1; i < vendas.length; i++) {
    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
        mesMaiorVenda = i;
    }
}

let mesMenorVenda = 0;
let menorVenda = vendas[0];
for (let i = 1; i < vendas.length; i++) {
    if (vendas[i] < menorVenda) {
        menorVenda = vendas[i];
        mesMenorVenda = i;
    }
}

let acimaDaMedia = 0;
let abaixoDaMedia = 0;
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] > mediaMensal) {
        acimaDaMedia++;
    } else {
        abaixoDaMedia++;
    }
}
console.log(`Total de vendas no ano: R$ ${totalVendas.toFixed(2)}`);
console.log(`Média mensal: R$ ${mediaMensal.toFixed(2)}`);
console.log(`Mês com maior venda: ${mesMaiorVenda + 1} (R$ ${maiorVenda.toFixed(2)})`);
console.log(`Mês com menor venda: ${mesMenorVenda + 1} (R$ ${menorVenda.toFixed(2)})`);
console.log(`Meses acima da média: ${acimaDaMedia}`);
console.log(`Meses abaixo da média: ${abaixoDaMedia}`);

console.log("_______________________________");