// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

const lerTeclado = require("readline-sync");
// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:
// console.log("Bem vindo ao Restaurante Formiga Atômica!");

// const cardapio = [
//   { numero: 1, nome: "Frango Grelhado", preco: 32.00 },
//   { numero: 2, nome: "Filé ao Molho", preco: 45.00 },
//   { numero: 3, nome: "Massa Italiana", preco: 28.00 },
//   { numero: 4, nome: "Salada Caesar", preco: 22.00 },
//   { numero: 5, nome: "Sopa do Dia", preco: 18.00 }
// ];

// const bebidas = [
//   { numero: 1, nome: "Suco Natural", preco: 9.00 },
//   { numero: 2, nome: "Refrigerante", preco: 7.00 },
//   { numero: 3, nome: "Água", preco: 4.00 },
//   { numero: 4, nome: "Sem bebida", preco: 0.00 }
// ];

// console.table(cardapio);
// console.table(bebidas);
// let nomeCliente = lerTeclado.question("Qual é o seu nome? ");
// let numeroPrato = lerTeclado.questionInt("Escolha o número do prato desejado: ");
// let numeroBebida = lerTeclado.questionInt("Escolha o número da bebida desejada: ");


// let nomePrato, precoPrato;
// switch (numeroPrato) {
//   case 1:
//     nomePrato = cardapio[0].nome;
//     precoPrato = cardapio[0].preco;
//     break;
//   case 2:
//     nomePrato = cardapio[1].nome;
//     precoPrato = cardapio[1].preco;
//     break;
//   case 3:
//     nomePrato = cardapio[2].nome;
//     precoPrato = cardapio[2].preco;
//     break;
//   case 4:
//     nomePrato = cardapio[3].nome;
//     precoPrato = cardapio[3].preco;
//     break;
//   case 5:
//     nomePrato = cardapio[4].nome;
//     precoPrato = cardapio[4].preco;
//     break;
//   default:
//     console.log("Item inválido.");
//     nomePrato = "Item inválido";
//     precoPrato = 0;
//     process.exit();
// }
// let nomeBebida, precoBebida;
// switch (numeroBebida) {
//   case 1:
//     nomeBebida = bebidas[0].nome;
//     precoBebida = bebidas[0].preco;
//     break;
//   case 2:
//     nomeBebida = bebidas[1].nome;
//     precoBebida = bebidas[1].preco;
//     break;
//   case 3:
//     nomeBebida = bebidas[2].nome;
//     precoBebida = bebidas[2].preco;
//     break;
//   case 4:
//     nomeBebida = bebidas[3].nome;
//     precoBebida = bebidas[3].preco;
//     break;
//   default:
//     console.log("Item inválido.");
//     nomeBebida = "Item inválido";
//     precoBebida = 0;
//     process.exit();
// }
// let total = precoPrato + precoBebida;
// const pedido = {
//   nomeCliente: nomeCliente,
//   nomePrato: nomePrato,
//   precoPrato: precoPrato,
//   nomeBebida: nomeBebida,
//   precoBebida: precoBebida,
//   total: total
// };
// const pagarPix = lerTeclado.keyInYN("Você vai pagar no pix? ");
// switch (pagarPix) {
//   case true:
//     pedido.total = total * 0.10;
//     console.log("Desconto de 10% aplicado!");
//     break;
//   default:
//     console.log("Pagamento não realizado com pix.");
// }

// console.table(pedido);
// console.log(`Recibo final: ${pedido.nomeCliente}, você pediu ${pedido.nomePrato} e ${pedido.nomeBebida}. O total é R$${pedido.total.toFixed(2)}.`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:

// let converterValor = lerTeclado.questionFloat("Digite o valor a converter: ");
// let tipoConversao = lerTeclado.questionInt(
//   "Escolha o tipo de conversão:\n1 – Km para Milhas\n2 – Milhas para Km\n3 – Celsius para Fahrenheit\n4 – Fahrenheit para Celsius\n5 – Kg para Libras\n6 – Libras para Kg\nDigite o número da opção: "
// );
// let resultado, unidadeOriginal, unidadeResultado;

// switch (tipoConversao) {
//   case 1:
//     resultado = converterValor * 0.621371;
//     unidadeOriginal = "Km";
//     unidadeResultado = "Milhas";
//     console.log(`${converterValor} Km = ${resultado.toFixed(2)} Milhas`);
//     break;
//   case 2:
//     resultado = converterValor * 1.60934;
//     unidadeOriginal = "Milhas";
//     unidadeResultado = "Km";
//     console.log(`${converterValor} Milhas = ${resultado.toFixed(2)} Km`);
//     break;
//   case 3:
//     resultado = (converterValor * 9 / 5) + 32;
//     unidadeOriginal = "Celsius";
//     unidadeResultado = "Fahrenheit";
//     console.log(`${converterValor} Celsius = ${resultado.toFixed(2)} Fahrenheit`);
//     break;
//   case 4:
//     resultado = (converterValor - 32) * 5 / 9;
//     unidadeOriginal = "Fahrenheit";
//     unidadeResultado = "Celsius";
//     console.log(`${converterValor} Fahrenheit = ${resultado.toFixed(2)} Celsius`);
//     break;
//   case 5:
//     resultado = converterValor * 2.20462;
//     unidadeOriginal = "Kg";
//     unidadeResultado = "Libras";
//     console.log(`${converterValor} Kg = ${resultado.toFixed(2)} Libras`);
//     break;
//   case 6:
//     resultado = converterValor / 2.20462;
//     unidadeOriginal = "Libras";
//     unidadeResultado = "Kg";
//     console.log(`${converterValor} Libras = ${resultado.toFixed(2)} Kg`);
//     break;
//   default:
//     console.log("Tipo de conversão inválido.");
//     process.exit();
// };
// const conversao = {
//   tipo: tipoConversao,
//   valorOriginal: converterValor,
//   unidadeOriginal: unidadeOriginal,
//   resultado: resultado,
//   unidadeResultado: unidadeResultado
// };
// console.table(conversao);
// console.log(`${conversao.valorOriginal} ${conversao.unidadeOriginal} = ${conversao.resultado} ${conversao.unidadeResultado}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:


// const jogada = ["pedra", "papel", "tesoura"];
// const computador = jogada[Math.floor(Math.random() * 3)];
// let jogadaUsuario = lerTeclado.questionInt("Escolha sua jogada:\n1 – Pedra\n2 – Papel\n3 – Tesoura\nDigite o número da opção: ");
// let jogadaUsuarioTexto;

// switch (jogadaUsuario) {
//   case 1:
//     jogadaUsuarioTexto = "pedra";
//     break;
//   case 2:
//     jogadaUsuarioTexto = "papel";
//     break;
//   case 3:
//     jogadaUsuarioTexto = "tesoura";
//     break;
//   default:
//     console.log("Jogada inválida.");
//     process.exit();
// };

// console.log(`Você: ${jogadaUsuarioTexto} | Computador: ${computador}`);

// switch (jogadaUsuarioTexto) {
//   case "pedra":
//     if (computador === "pedra") {
//       console.log("Empate!");
//     } else if (computador === "papel") {
//       console.log("Computador venceu!");
//     } else {
//       console.log("Você venceu!");
//     };
//     break;
//   case "papel":
//     if (computador === "pedra") {
//       console.log("Você venceu!");
//     } else if (computador === "papel") {
//       console.log("Empate!");
//     } else {
//       console.log("Computador venceu!");
//     };
//     break;
//   case "tesoura":
//     if (computador === "pedra") {
//       console.log("Computador venceu!");
//     } else if (computador === "papel") {
//       console.log("Você venceu!");
//     } else {
//       console.log("Empate!");
//     };
//     break;
// }


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:

let menuPrincipal = lerTeclado.questionInt("Menu Principal:\n1 – Internet\n2 – TV\n3 – Telefone\n4 – Falar com atendente\n0 – Encerrar\nDigite o número da opção: ");
switch (menuPrincipal) {
  case 1:
    let subMenuInternet = lerTeclado.questionInt("Sub-menu Internet:\n1 – Sem conexão\n2 – Conexão lenta\n3 – Wi-Fi não aparece\nDigite o número da opção: ");
    switch (subMenuInternet) {
      case 1:
        console.log("Verifique se o cabo de rede está conectado ou reinicie seu modem.");
        break;
      case 2:
        console.log("Tente reiniciar seu modem ou verifique se há muitos dispositivos conectados.");
        break;
      case 3:
        console.log("Certifique-se de que o Wi-Fi está ativado no seu dispositivo e reinicie o modem.");
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
    break;
  case 2:
    let subMenuTV = lerTeclado.questionInt("Sub-menu TV:\n1 – Sem sinal\n2 – Imagem ruim\n3 – Canais sumidos\nDigite o número da opção: ");
    switch (subMenuTV) {
      case 1:
        console.log("Verifique se o cabo de TV está conectado ou reinicie seu decoder.");
        break;
      case 2:
        console.log("Tente ajustar a qualidade da imagem no menu de configurações.");
        break;
      case 3:
        console.log("Certifique-se de que os canais estão corretamente configurados no seu decoder.");
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
    break;
  case 3:
    console.log("Por favor, aguarde na linha.");
    break;
  case 4:
    console.log("Por favor, aguarde na linha.");
    break;
  case 0:
    console.log("Atendimento encerrado.");
    break;
  default:
    console.log("Opção inválida.");
    break;
}


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – TÁXI OU APP?
// ------------------------------------------------------------
// O usuário informa a distância em km e o horário (dia ou noite).
// O programa calcula o preço estimado no táxi e em um app de corridas
// e recomenda a opção mais barata.
//
// Tabela:
//   Táxi: R$5 bandeirada + R$3/km (noite: R$4/km)
//   App:  R$2 taxa fixa  + R$2/km (noite: R$2.50/km)

// → Seu código aqui:

let distanciaKm = lerTeclado.questionFloat("Informe a distância em km: ");
let horario = lerTeclado.questionInt("Informe o horário:\n1 – Dia\n2 – Noite\nDigite o número da opção: ");
let precoTaxi, precoApp;
switch (horario) {
  case 1:
    precoTaxi = 5 + (3 * distanciaKm);
    precoApp = 2 + (2 * distanciaKm);
    break;
  case 2:
    precoTaxi = 5 + (4 * distanciaKm);
    precoApp = 2 + (2.5 * distanciaKm);
    break;
  default:
    console.log("Opção de horário inválida.");
    process.exit();
}
console.log(`Preço estimado no Táxi: R$${precoTaxi.toFixed(2)}`);
console.log(`Preço estimado no App: R$${precoApp.toFixed(2)}`);
if (precoTaxi < precoApp) {
  console.log("Recomendação: Táxi");
} else if (precoApp < precoTaxi) {
  console.log("Recomendação: App de corridas");
} else {
  console.log("Ambas as opções têm o mesmo preço. Você pode escolher qualquer uma!");
}


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – CRIE SEU PERSONAGEM DE RPG
// ------------------------------------------------------------
// O usuário responde 3 ou mais perguntas de multipla escolha (crie outras se quiser)
//  ex: prefere magia ou força?
//      prefere ataque ou defesa?
//      prefere floresta ou cidade?
//      prefere dia ou noite?
//      prefere furtividade ou agressividade?
//      prefere ataque a distância ou corpo a corpo?
// Com base nas respostas, o programa revela uma classe de personagem
// (guerreiro, mago, arqueiro, ladino, etc).
//
// Você pode criar um sistema de atribuição de pontos para cada resposta
// e determinar a classe final com base na pontuação total,
// ou simplesmente fazer verificações diretas. Use a criatividade para resolver este desafio.

const personagem = {
  nome: lerTeclado.question("Qual é o nome do seu personagem? "),
  preferenciaMagiaForca: lerTeclado.questionInt("Você prefere magia ou força?\n1 – Magia\n2 – Força\nDigite o número da opção: "),
  preferenciaAtaqueDefesa: lerTeclado.questionInt("Você prefere ataque ou defesa?\n1 – Ataque\n2 – Defesa\nDigite o número da opção: "),
  preferenciaFlorestaCidade: lerTeclado.questionInt("Você prefere floresta ou cidade?\n1 – Floresta\n2 – Cidade\nDigite o número da opção: "),
  prefereFurtividadeAgressividade: lerTeclado.questionInt("Você prefere furtividade ou agressividade?\n1 – Furtividade\n2 – Agressividade\nDigite o número da opção: "),
  preferenciaAtaqueDistanciaCorpoACorpo: lerTeclado.questionInt("Você prefere ataque a distância ou corpo a corpo?\n1 – Ataque a distância\n2 – Corpo a corpo\nDigite o número da opção: ")
};
// Exemplo de como as respostas viriam (true para a primeira opção, false para a segunda)
preferenciaMagiaForca = true;          // true: Magia / false: Força
preferenciaAtaqueDefesa = true;         // true: Ataque / false: Defesa
preferenciaFlorestaCidade = true;       // true: Floresta / false: Cidade
preferenciaDiaNoite = true;            // true: Dia / false: Noite
preferenciaFurtividadeAgressividade = true;  // true: Agressividade / false: Furtividade
preferenciaAtaqueDistanciaCorpoACorpo = true;      // true: Distância / false: Corpo a Corpo

switch (true) {
  case (preferenciaMagiaForca && preferenciaAtaqueDefesa && preferenciaFlorestaCidade && preferenciaFurtividadeAgressividade && preferenciaAtaqueDistanciaCorpoACorpo):
    console.log(`${personagem.nome}, você é um Mago Guerreiro!`);
    break;
  case (!preferenciaMagiaForca && !preferenciaAtaqueDefesa && !preferenciaFlorestaCidade && !preferenciaFurtividadeAgressividade && !preferenciaAtaqueDistanciaCorpoACorpo):
    console.log(`${personagem.nome}, você é um Ladino!`);
    break;
  case (preferenciaMagiaForca && !preferenciaAtaqueDefesa && preferenciaFlorestaCidade && !preferenciaFurtividadeAgressividade && !preferenciaAtaqueDistanciaCorpoACorpo):
    console.log(`${personagem.nome}, você é um Clérigo Protecionista!`);
    break;
  case (!preferenciaMagiaForca && preferenciaAtaqueDefesa && !preferenciaFlorestaCidade && preferenciaFurtividadeAgressividade && preferenciaAtaqueDistanciaCorpoACorpo):
    console.log(`${personagem.nome}, você é um Arqueiro Vingativo!`);
    break;
  case (!preferenciaMagiaForca && preferenciaAtaqueDefesa && preferenciaFlorestaCidade && !preferenciaFurtividadeAgressividade && preferenciaAtaqueDistanciaCorpoACorpo):
    console.log(`${personagem.nome}, você é um Guerreiro da Floresta!`);
    break;
  case (preferenciaMagiaForca && preferenciaAtaqueDefesa && !preferenciaFlorestaCidade && preferenciaFurtividadeAgressividade && !preferenciaAtaqueDistanciaCorpoACorpo):
    console.log(`${personagem.nome}, você é um Mago Agressivo!`);
    break;
  case (!preferenciaMagiaForca && !preferenciaAtaqueDefesa && preferenciaFlorestaCidade && preferenciaFurtividadeAgressividade && !preferenciaAtaqueDistanciaCorpoACorpo):
    console.log(`${personagem.nome}, você é um Ladino da Floresta!`);
    break;
  default:
    console.log(`${personagem.nome}, sua classe de personagem é única e personalizada!`);
}
