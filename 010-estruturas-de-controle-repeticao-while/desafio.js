// ============================================================
//   DESAFIOS (para quem já terminou a atividade 10) – While
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================
let lerTeclado = require("readline-sync")

// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial
//    - Taxa de juros mensal em % — ex: 1.5
//    - Meta de saldo a atingir
// b) Usando while, calcule quantos meses são necessários para
//    atingir a meta. A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
//    Exiba cada mês: "Mês <mes>: R$ <saldo>"
// c) Ao atingir a meta, exiba:
//    "Meta atingida em <mes> meses! Saldo final: R$ <saldo>"
// d) Armazene cada mês como objeto { mes, saldo } em um array
//    e exiba com console.table().
// e) Desafio extra: ao invés de exibir mês 1, mês 2, mês 3, etc.
//    exiba Janeiro, Fevereiro, Março, etc.
//    Atenção para casos que ultrapassem 12 meses...

// → Seu código aqui:

// let saldoInicial = lerTeclado.questionFloat("Digite seu saldo inicial: ")
// let taxaJuros = lerTeclado.questionFloat("Digite a taxa de juros mensal (em %): ")
// let metaSaldo = lerTeclado.questionFloat("Digite a meta de saldo: ")
// let obejetivo = []
// let mes = 0;
// let numeMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
// while (saldoInicial < metaSaldo) {
//     mes++;
//     let nomeMes = numeMeses[(mes - 1) % 12];
//     saldoInicial = saldoInicial * (1 + taxaJuros / 100);
//     console.log(`Mês ${nomeMes}: R$ ${saldoInicial.toFixed(2)}`);
//     obejetivo.push({ mes: nomeMes, saldo: saldoInicial.toFixed(2) });
// }
// console.log(`Meta atingida em ${mes} meses! Saldo final: R$ ${saldoInicial.toFixed(2)}`);
// console.table(obejetivo);

// console.log("_______________________________");


// // ------------------------------------------------------------
// // DESAFIO 2 – Sequência de Fibonacci
// // ------------------------------------------------------------
// // A sequência de Fibonacci começa com 0 e 1.
// // Cada número seguinte é a soma dos dois anteriores:
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// //
// // a) Peça ao usuário um limite N.
// // b) Usando while, gere e exiba todos os números da sequência
// //    de Fibonacci menores ou iguais a N.
// // c) Conte quantos números foram gerados.
// // d) Exiba: "Total de números na sequência até <N>: <qtd>"
// // e) Informe se o próprio N é um número de Fibonacci.

// // → Seu código aqui:
// let N = lerTeclado.questionInt("Digite um numero limite para a sequência de Fibonacci: ");
// let numero1 = 0;
// let numero2 = 1;
// let proximoNumero = 0;
// let soma = 0;
// let contador = 0;
// while (proximoNumero <= N) {
//     proximoNumero = numero1 + numero2;
//     numero1 = numero2;
//     numero2 = proximoNumero;
//     contador++;
//     if (proximoNumero <= N) {
//         console.log(proximoNumero);
//     }
// } if (N === 0 || N === 1) {
//     console.log(`${N} é um número de Fibonacci.`);
// } else {
//     let a = 0;
//     let b = 1;
//     let encontrado = false;
//     while (b <= N) {

//         if (b === N) {
//             encontrado = true;
//         }
//         let temp = b;
//         b = a + b;
//         a = temp;
//     }
//     if (encontrado) {
//         console.log(`${N} é um número de Fibonacci.`);
//     } else {
//         console.log(`${N} não é um número de Fibonacci.`);
//     }
// }
// console.log(`Total de números na sequência até ${N}: ${contador}`);
// console.log(`Total de numeros na sequencia de Fibonacci até ${N}: ${contador}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Caixa registradora
// ------------------------------------------------------------
// Simule o caixa de uma loja.
//
// a) Utilizando a lista de produtos:
let produtos = [
    { nome: "Caneta", preco: 2.5, estoque: 50 },
    { nome: "Caderno", preco: 18.9, estoque: 25 },
    { nome: "Mochila", preco: 89.0, estoque: 15 },
    { nome: "Régua", preco: 4.75, estoque: 35 },
    { nome: "Estojo", preco: 12.3, estoque: 10 }
]
// b) Usando do...while, repita o fluxo de compra:
//    - Exiba o menu de produtos com preços usando console.table().
//    - Pergunte qual produto deseja (número de 1 a 5).
//    - Pergunte a quantidade.
//    - Se possuir estoque necessário, adicione ao carrinho[] no seguinte formato: { produto, quantidade, subtotal } e atualize o estoque.
//    - Pergunte: "Continuar comprando?" (keyInYN()).
// c) Ao sair do loop, exiba o carrinho com console.table().
// d) Calcule e exiba o total da compra.
// e) Pergunte se vai pagar com desconto de funcionário (keyInYN()).
//    Se sim, aplique 15% de desconto.
// f) Exiba o valor final com e sem desconto.

// → Seu código aqui:
// let carrinho = [];
// let continuar = true;
// while (true) {
//     console.table(produtos);
//     let numeroDoproduto = lerTeclado.questionInt("Escolha um produto de 1 a 5: ");
//     if (numeroDoproduto < 1 || numeroDoproduto > 5) {
//         console.log("item invalido");
//         continue;
//     };
//     let quantidade = lerTeclado.questionInt("Digite a quantidade desejada: ");

//     switch (numeroDoproduto) {
//         case 1:
//             if (quantidade <= produtos[0].estoque) {
//                 carrinho.push({ nome: produtos[0].nome, preco: produtos[0].preco, quantidade: quantidade });
//                 produtos[0].estoque -= quantidade
//             } else {
//                 console.log("Nao tem em estoque!!")
//             }
//             break;
//         case 2:
//             if (quantidade <= produtos[1].estoque) {
//                 carrinho.push({ nome: produtos[1].nome, preco: produtos[1].preco, quantidade: quantidade });
//                 produtos[1].estoque -= quantidade
//             } else {
//                 console.log("Nao tem em estoque!!")
//             }
//             break;
//         case 3:
//             if (quantidade <= produtos[2].estoque) {
//                 carrinho.push({ nome: produtos[2].nome, preco: produtos[2].preco, quantidade: quantidade });
//                 produtos[2].estoque -= quantidade
//             } else {
//                 console.log("Nao tem em estoque!!")
//             } break;
//         case 4:
//             if (quantidade <= produtos[3].estoque) {
//                 carrinho.push({ nome: produtos[3].nome, preco: produtos[3].preco, quantidade: quantidade });
//                 produtos[3].estoque -= quantidade
//             } else {
//                 console.log("Nao tem em estoque!!")
//             } break;
//         case 5:
//             if (quantidade <= produtos[4].estoque) {
//                 carrinho.push({ nome: produtos[4].nome, preco: produtos[4].preco, quantidade: quantidade });
//                 produtos[4].estoque -= quantidade
//             } else {
//                 console.log("Nao tem em estoque!!")
//             } break;

//     }
//     let para = lerTeclado.keyInYN("Deseja adicionar algo mais ?");
//     if (para === false) {
//         break;
//     }
// }
// console.table(carrinho);
// let total = 0;
// for (let item of carrinho) {
//     total += item.preco * item.quantidade
// }
// console.log(`Total da compra $${total.toFixed(2)}`);
// let Pagamento = lerTeclado.keyInYN("Vai pagar com desconto de funcionario ? ");
// if (Pagamento === true) {
//     let precoComdesconto = total - (total * 15 / 100)
//     console.log(`O valor a ser pago com desconto e de $${precoComdesconto.toFixed(2)}`);
// } else {
//     console.log(`O valor sem desconto e de $${total.toFixed(2)}`);
// }

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Validador de senha
// ------------------------------------------------------------
// O usuário tem 3 tentativas para acertar a senha correta.
//
// a) Defina a senha correta como: "js2025"
// b) Usando while, peça a senha ao usuário e:
//    - Conte as tentativas.
//    - Se acertar: exiba "Acesso liberado!" e encerre.
//    - Se errar e ainda tiver tentativas: informe quantas restam.
//    - Se esgotar as 3 tentativas: exiba "Conta bloqueada!" e encerre.
// c) Ao final, exiba um objeto com console.table():
//    { tentativasUsadas, resultado: "Liberado" ou "Bloqueado" }

// → Seu código aqui:
// let senhaCorreta = "js2025";
// let tentativas = 3;
// let tentativasUsadas = 0;
// let resultado = "";
// while (true) {
//     let senha = lerTeclado.question("Qual senha para login ?");
//     tentativasUsadas++
//     if (senha === senhaCorreta) {
//         console.log("acesso liberado!")
//         resultado = "Aprovado";
//         break;
//     } else {
//         console.log(`Tente novamente, tentativas restantes ${tentativas} `);
//         tentativas--
//         if (tentativas < 1) {
//             console.log("Conta bloqueada!");
//             resultado = "Bloqueado";
//             break;
//         }
//     }
// }
// console.table([{ tentativas: tentativasUsadas, resultado: resultado }]);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Calculadora persistente
// ------------------------------------------------------------
// Uma calculadora que continua operando até o usuário sair.
//
// a) Inicialize 'resultado' com 0.
// b) Usando do...while, repita:
//    - Exiba o resultado atual.
//    - Exiba o menu de operações:
//      1 – Somar | 2 – Subtrair | 3 – Multiplicar | 4 – Dividir | 5 – Zerar | 0 – Sair
//    - Peça a operação.
//    - Para 1 a 4, peça um número e aplique ao resultado.
//      Na divisão, trate (não permita) divisão por zero.
//    - Para 5, zere o resultado.
//    - Para 0, encerre.
// c) Ao sair, exiba: "Resultado final: <resultado>"
// Observação: Realize os cálculos conforme solicitado, não se preocupando com a ordem/sequência lógica matemática

// → Seu código aqui:

let resultado = 0;
let rodando = true;
do {
    console.log(`Resultado atual ${resultado}`);
    console.log('1 - Somar, 2 - Subtrair, 3 - Multiplicar, 4 - Dividir, 5 - Zerar, 0 - Sair');
    let escolha = lerTeclado.questionInt("Escolha uma operação: ");
    switch (escolha) {
        case 1:
            let numero = lerTeclado.questionInt("Digite um numero para resultado: ");
            resultado += numero
            break;
        case 2:
            let numero1 = lerTeclado.questionInt("Digite um numero para resultado: ");
            resultado -= numero1;
            break;
        case 3:
            let numero2 = lerTeclado.questionInt("Digite um numero para resultado: ");
            resultado *= numero2;
            break;
        case 4:
            let numero3 = lerTeclado.questionInt("Digite um numero para resultado: ");
            if (numero3 === 0) {
                console.log("Não e possivel dividir por zero");
            } else {
                resultado /= numero3
            }
            break;
        case 5:
            resultado = 0;
            console.log("Calculadora zerada...");
            break;
        case 0:
            console.log("Saindo da calculadora... Ate logo!");
            rodando = false;
            break;
        default:
            console.log("Opcao invalida! Digite um numero de 0 a 5.");
    }
} while (rodando);
console.log(`Resultado final ${resultado.toFixed(2)}`);

console.log("_______________________________");