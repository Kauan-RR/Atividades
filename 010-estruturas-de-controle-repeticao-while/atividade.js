// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================
let lerTeclado = require('readline-sync');

// // ------------------------------------------------------------
// // EXERCÍCIO 1 – While simples
// // ------------------------------------------------------------
// // a) Declare uma variável 'n' com valor 1.
// // b) Usando while, exiba os números de 1 a 7 no console.
// // c) Ao final, exiba: "Fim da contagem!"

// // → Seu código aqui:

// let n = 1;
// while (n <= 7) {
//     console.log(n);
//     n++;
// }



// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 2 – Contagem regressiva
// // ------------------------------------------------------------
// // a) Declare uma variável 'regressiva' com valor 10.
// // b) Usando while, exiba a contagem de 10 até 1.
// // c) Ao final, exiba: "Lançamento ON!"

// // → Seu código aqui:

// let regressiva = 10
// while (regressiva >= 1) {
//     console.log(regressiva);
//     regressiva--


// }


// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 3 – Validação de entrada
// // ------------------------------------------------------------
// // a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
// //    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// // b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// // → Seu código aqui:

// let numero;
// while (true) {
//     numero = lerTeclado.questionInt("Digite um número entre 1 e 5: ");
//     if (numero >= 1 && numero <= 5) {
//         break;
//     } else {
//         console.log("Valor fora do intervalo. Tente novamente.");
//     }
// }
// console.log(`Você escolheu: ${numero}`);


// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 4 – Acumulador com while
// // ------------------------------------------------------------
// // a) Usando while, peça ao usuário números até que ele digite 0.
// // b) Acumule a soma de todos os números digitados.
// // c) Conte quantos números foram digitados (exceto o 0).
// // d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// // → Seu código aqui:
// let soma = 0;
// let quantidade = 0;
// let numerosDigitados = [];
// while (true) {
//     let numero = lerTeclado.questionInt("Digite um número (0 para encerrar): ");
//     if (numero === 0) {
//         break;
//     }
//     soma += numero;
//     quantidade++;
//     numerosDigitados.push(numero);
// }

// console.log(`Soma: ${soma}`);
// console.log(`Quantidade: ${quantidade}`);
// console.log(`Números digitados: ${numerosDigitados.join(', ')}`);

// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 5 – Média com while e validação
// // ------------------------------------------------------------
// // a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
// //    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// // b) Calcule e exiba a média.

// // → Seu código aqui:
// let somaNotas = 0;
// let quantidadeNotas = 0;
// while (true) {
//     let nota = lerTeclado.questionInt("Digite uma nota (0 a 10, -1 para encerrar): ");
//     if (nota === -1) {
//         break;
//     }
//     if (nota < 0 || nota > 10) {
//         console.log("Nota invalida.");
//         continue;
//     }
//     somaNotas += nota;
//     quantidadeNotas++;
// }
// if (quantidadeNotas > 0) {
//     let media = somaNotas / quantidadeNotas;
//     console.log(`Média: ${media.toFixed(2)}`);
// }
// console.log("Quantidade de notas válidas: " + quantidadeNotas);

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:

let opcao;
do {
    console.log("1 – Exibir hora atual | 2 – Exibir data atual | 0 – Sair");
    opcao = lerTeclado.questionInt("Escolha: ");
    switch (opcao) {
        case 1:
            console.log(`hora atual: ${new Date().toLocaleTimeString()}`);
            break;
        case 2:
            console.log(`data atual ${new Date().toLocaleDateString()}`);
            break;
        case 0:
            console.log("Saindo...");
            break;
    }
} while (opcao !== 0);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui: 
// let numberSecret = Math.floor(Math.random() * 50) + 1;
// let namePlayer = lerTeclado.question("Digite seu nome: ");
// let tentaivas = 0;
// let palpite;
// while (palpite !== numberSecret) {
//     palpite = lerTeclado.questionInt("Digite seu palpite: ");
//     tentaivas++;
//     if (palpite > numberSecret) {
//         console.log("Muito alto! Tente menor.");
//     } else if (palpite < numberSecret) {
//         console.log("Muito baixo! Tente maior.");
//     } else {
//         console.log(`${namePlayer} acertou após ${tentaivas} tentativa(s)! O número era ${numberSecret}.`);
//     }
// }



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:

// let numeroTabuada = lerTeclado.questionInt("Digite um número inteiro para ver a tabuada: ");
// let i = 1;
// while (i <= 10) {
//     console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
//     i++;
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:
// let saldo = 1000;
// let rodada = 0;
// while (saldo > 0 && rodada < 10) {
//     let saque = Math.floor(Math.random() * 151) + 50; // saque aleatorio de 50 a 200
//     rodada++;
//     if (saque > saldo) {
//         console.log("Saldo insuficiente. fim!.");
//         break;
//     } else if (saque <= saldo) {
//         saldo -= saque;
//         console.log(`Rodada ${rodada}: sacou R$ ${saque} | Novo saldo: R$ ${saldo}`);
//     }
//     console.log(`Saldo restante: R$ ${saldo} | Total de rodadas: ${rodada}`);
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:

let contatos = [];
let adicionarOutro;
do {
    let nome = lerTeclado.question("Digite o nome do contato: ");
    let telefone = lerTeclado.question("Digite o telefone do contato: ");
    contatos.push({ nome, telefone });
    let adicionarOutro = lerTeclado.keyInYN("Adicionar outro contato? ");
    if (!adicionarOutro) {
        break;
    }
} while (!adicionarOutro) {
}
console.table(contatos);
console.log(`Total de contatos cadastrados: ${contatos.length}`);


console.log("_______________________________");