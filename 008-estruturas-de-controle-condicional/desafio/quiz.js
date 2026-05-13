// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
let lerteclado = require('readline-sync');


//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let jogador = {
    nome: lerteclado.question('Qual é o seu nome? '),
    pontos: 0
}
console.log("Seja bem vindo ao quiz de tecnologia, este quiz serve para explorar seus conhecimentos");
console.log("Vamos começar! Boa sorte!");
console.log("Pergunta 1: Qual é a linguagem de programação mais utilizada no mundo?");
console.log("1) JavaScript");
console.log("2) Python");
console.log("3) Java");
console.log("4) C++");
let resposta1 = lerteclado.questionInt('Digite o número da alternativa correta: ');
console.log("Pergunta 2: Qual é o sistema operacional mais utilizado no mundo?");
console.log("1) Windows");
console.log("2) macOS");
console.log("3) Linux");
console.log("4) Android");
let resposta2 = lerteclado.questionInt('Digite o número da alternativa correta: ');
console.log("Pergunta 3: Qual é a empresa responsável pelo desenvolvimento do sistema operacional Android?");
console.log("1) Apple");
console.log("2) Microsoft");
console.log("3) Google");
console.log("4) Facebook");
let resposta3 = lerteclado.questionInt('Digite o número da alternativa correta: ');
console.log("Pergunta 4: Qual é a linguagem de programação mais utilizada para desenvolvimento de aplicativos móveis?");
console.log("1) Java");
console.log("2) Swift");
console.log("3) Kotlin");
console.log("4) Dart");
let resposta4 = lerteclado.questionInt('Digite o número da alternativa correta: ');
console.log("Pergunta 5: Qual é a empresa responsável pelo desenvolvimento do sistema operacional iOS?");
console.log("1) Apple");
console.log("2) Microsoft");
console.log("3) Google");
console.log("4) Facebook");
let resposta5 = lerteclado.questionInt('Digite o número da alternativa correta: ');
switch (resposta1) {
    case 1:
        console.log("Correto!");
        jogador.pontos += 1;
        break;
    case 2:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}
switch (resposta2) {
    case 1:
        console.log("Correto!");
        jogador.pontos += 1;
        break;
    case 2:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}
switch (resposta3) {
    case 3:
        console.log("Correto!");
        jogador.pontos += 1;
        break;
    case 1:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 2:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}
switch (resposta4) {
    case 3:
        console.log("Correto!");
        jogador.pontos += 1;
        break;
    case 1:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 2:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}
switch (resposta5) {
    case 1:
        console.log("Correto!");
        jogador.pontos += 1;
        break;
    case 2:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.");
}
console.log(`Você fez ${jogador.pontos} de 5 pontos.`);
switch (jogador.pontos) {
    case 5:
        console.log("Parabéns! Você acertou todas as perguntas!");
        break;
    case 4:
        console.log("Muito bom! Você acertou 4 de 5 perguntas.");
        break;
    case 3:
        console.log("Não está ruim! Você acertou 3 de 5 perguntas.");
        break;
    case 2:
        console.log("Você pode melhorar! Você acertou 2 de 5 perguntas.");
        break;
    case 1:
        console.log("Tente novamente! Você acertou apenas 1 de 5 perguntas.");
        break;
    case 0:
        console.log("Não desista! Você não acertou nenhuma pergunta.");
        break;
}
if (jogador.pontos >= 3) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}
console.table({
    jogador: jogador.nome,
    pontos: jogador.pontos,
    total: 5,
    aprovado: jogador.pontos >= 3
});
