// ============================================================
//   DESAFIOS (para quem já terminou a atividade 07) – If / Else
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Classificador de IMC
// ------------------------------------------------------------
// Já realizamos um exercício similar, mas agora vamos aprimorar e exibir somente o resultado final.
// a) Pergunte ao usuário seu nome, peso (kg) e altura (m).
// b) Armazene os dados em um objeto "pessoa".
// c) Calcule o IMC: peso / (altura ** 2). Adicione ao objeto.
// d) Classifique o IMC usando if/else if/else e adicione a classificação ao objeto:
//    - IMC < 18.5          → "Abaixo do peso"
//    - IMC >= 18.5 e < 25  → "Peso normal"
//    - IMC >= 25 e < 30    → "Sobrepeso"
//    - IMC >= 30 e < 35    → "Obesidade grau I"
//    - IMC >= 35 e < 40    → "Obesidade grau II"
//    - IMC >= 40           → "Obesidade grau III"
// e) Exiba o objeto com console.table().
// f) Exiba uma mensagem final:
//    "<nome>, seu IMC é <imc> – <classificação>."

// → Seu código aqui:

// let nome = lerTeclado.question("Digite  seu nome:");
// let peso = lerTeclado.questionFloat("Digite seu peso (kg):");
// let altura = lerTeclado.questionFloat("Digite sua altura (m):");
// const pessoa = {}
// pessoa.nome = nome;
// pessoa.peso = peso;
// pessoa.altura = altura;
// pessoa.imc = pessoa.peso / (pessoa.altura ** 2);
// pessoa.classificacao = "";

// if (pessoa.imc < 18.5) {
//    pessoa.classificacao = "Abaixo do peso";
// } else if (pessoa.imc >= 18.5 && pessoa.imc < 25) {
//     pessoa.classificacao = "Peso normal";
// } else if (pessoa.imc >= 25 && pessoa.imc < 30) {
//     pessoa.classificacao = "Sobrepeso"
// } else if (pessoa.imc >= 30 && pessoa.imc < 35) {
//     pessoa.classificacao = "Obesidade grau I"
// } else if (pessoa.imc >= 35 && pessoa.imc < 40) {
//   //pessoa.classificacao = "Obesidade grau II"
// } else {
//    pessoa.classificacao = "Obesidade grau III"
// }
// console.table(pessoa);
// console.log(`${pessoa.nome} seu imc e ${pessoa.imc} -  ${pessoa.classificacao}`);



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Caixa eletrônico
// ------------------------------------------------------------
// a) Defina um objeto "conta" com:
//    - titular: "Maria"
//    - saldo: 1500
//    - bloqueada: false
//    - senha: 1234
// b) Peça ao usuário:
//    - Senha de 4 dígitos.
// c) Verifique se a senha está correta.
//    - Se estiver incorreta → "Senha incorreta. Operação cancelada."
//    - Se estive correta, pergunte ao usuário se deseja sacar ou depositar um valor
// d) Se ele escolher sacar, pergunte qual valor que deseja sacar.
//    Se ele escolher depositar, pergunte qual valor que deseja depositar.
// e) Se for saque, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do saque for menor ou igual a 0 → "Valor inválido."
//    3. Se o saldo for insuficiente → "Saldo insuficiente. Saldo atual: R$ <saldo>"
//    4. Caso contrário → realize o saque, atualize o saldo e exiba:
//       "Saque de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// f) Se for depósito, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do depósito for menor ou igual a 0 → "Valor inválido."
//    3. Caso contrário → realize o depósito, atualize o saldo e exiba:
//       "Depósito de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// Evite repetir linhas de código.
// Verifique se é possível fazer verificações uma única vez, alterando a lógica ao invés de duplicar código.

// → Seu código aqui:

// const conta = {
//     titular: "Maria",
//     saldo: 1500,
//     bloqueada: false,
//     senha: 1234
// }
// let entradasenha = lerTeclado.question("Digite sua senha:");
// if (entradasenha != conta.senha) {
//     console.log("Senha incorreta. Operação cancelada.")
// } else {
//     conta.operacao = lerTeclado.question("Deseja sacar ou depositar um valor ?");
//     if (conta.operacao == "sacar") {
//         conta.valorSaque = lerTeclado.questionFloat("Qual valor deseja sacar ?");
//         if (conta.bloqueada == true) {
//             console.log("Conta bloqueada. Procure uma agência.")
//         } else if (conta.valorSaque <= 0) {
//             console.log("Valor invalido")
//         } else if (conta.saldo < conta.valorSaque) {
//             console.log(`Saldo insuficiente. Saldo atual: R$${conta.saldo}`)
//         } else {
//             conta.saldo -= conta.valorSaque
//             console.log(`Saque de R$${conta.valorSaque} realizado. Novo saldo: R$${conta.saldo}`)
//         }
//     } else if (conta.operacao == "depositar") {
//         conta.valorDeposito = lerTeclado.questionFloat("Qual valor deseja depositar ?");
//         if (conta.bloqueada == true) {
//             console.log("Conta bloqueada. Procure uma agência.")
//         } else if (conta.valorDeposito <= 0) {
//             console.log("Valor de depósito inválido.")
//         } else {
//             conta.saldo += conta.valorDeposito
//             console.log(`Depósito de R$${conta.valorDeposito} realizado. Novo saldo: R$${conta.saldo}`)
//         }
//     }
// }




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Classificação de filmes por faixa etária
// ------------------------------------------------------------
// Classificação indicativa:
//   - Livre          → todas as idades
//   - 10 anos        → 10 anos ou mais
//   - 12 anos        → 12 anos ou mais
//   - 14 anos        → 14 anos ou mais
//   - 16 anos        → 16 anos ou mais
//   - 18 anos        → 18 anos ou mais
//
// a) Pergunte ao usuário:
//    - Nome do espectador.
//    - Idade do espectador.
//    - Classificação do filme escolhido:
//      0 – Livre | 10 – 10 anos | 12 – 12 anos |
//      14 – 14 anos | 16 – 16 anos | 18 – 18 anos
// b) Armazene os dados em um objeto "cinema".
// c) Usando if/else if/else, verifique se o espectador pode assistir ao filme:
//    - Se a classificação for 0 (Livre) → sempre pode.
//    - Nos demais casos, compare a idade com a classificação.
// d) Exiba o resultado:
//    - Pode assistir → "<nome> pode assistir. Boa sessão!"
//    - Não pode → "<nome> não pode assistir. Classificação: <classificação> anos."

// → Seu código aqui:

// const classificacaoFilme = {
//     0: "todas as idades",
//     10: "10 anos ou mais",
//     12: "12 anos ou mais",
//     14: "14 anos ou mais",
//     16: "16 anos ou mais",
//     18: "18 anos ou mais"
// };

// console.table(classificacaoFilme);

// let nome = lerTeclado.question("Digite seu nome:");
// let idade = lerTeclado.questionInt("Digite sua idade:");
// let classificacao = lerTeclado.questionFloat("Digite a classificação do filme escolhido:");
// const cinema = {
//     nome: nome,
//     idade: idade,
//     classificacao: classificacao
// };
// if (cinema.classificacao === 0 || cinema.idade >= cinema.classificacao) {
//     console.log(`${cinema.nome} pode assistir. Boa sessão!`);
// } else {
//     console.log(`${cinema.nome} não pode assistir. Classificação: ${cinema.classificacao} anos.`);
// };


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Simulador de pedido de lanche
// ------------------------------------------------------------
// Cardápio:
//   1 – X-Burguer R$ 22,00
//   2 – X-Frango  R$ 20,00
//   3 – X-Veggie  R$ 18,00
//   4 – Combo (lanche + batata + refri)  R$ 35,00
//
// Adicionais (só para os itens 1, 2 e 3):
//   - Batata frita: + R$ 8,00
//   - Refrigerante: + R$ 5,00
//
// a) Pergunte ao usuário:
//    - Nome.
//    - Número do lanche desejado.
//    - Se o lanche não for o Combo:
//        - Quer batata frita?
//        - Quer refrigerante?
// b) Armazene todos os dados e o total calculado em um objeto "pedido".
// c) Calcule o total com base nas escolhas.
// d) Exiba o objeto "pedido" com console.table().
// e) Exiba o resumo final com template literal:
//    "Pedido de <nome>: <lanche> + adicionais = R$ <total>"

// → Seu código aqui:

const cardapio = {
    1: { nome: "X-Burguer", preco: 22 },
    2: { nome: "X-Frango", preco: 20 },
    3: { nome: "X-Veggie", preco: 18 },
    4: { nome: "Combo (lanche + batata + refrigerante)", preco: 35 },
    5: { adicionais: "Batata frita", preco1: 8 },
    6: { adicionais: "Refrigerante", preco1: 5 }
};
const carrinho = [];
let continuar = true;
nome = lerTeclado.question("Digite seu nome:");
while (continuar) {
    console.table(cardapio);
    numerolanche = lerTeclado.questionFloat("Digite o número do lanche (digite 0 para finalizar o pedido):");
    if (numerolanche === 0) {
        continuar = false;
    } else {
        let querbatata = false;
        let querrefrigerante = false;
        if (numerolanche !== 4) {
            querbatata = lerTeclado.keyInYN("Quer batata frita?");
            querrefrigerante = lerTeclado.keyInYN("Quer refrigerante?");
        } else {
            console.log("O combo já inclui batata frita e refrigerante.");
            querbatata = true;
            querrefrigerante = true;
        }

        const pedido = {
            nome: nome,
            numerolanche: numerolanche,
            querbatata: querbatata,
            querrefrigerante: querrefrigerante,
            total: cardapio[numerolanche].preco + (querbatata ? cardapio[5].preco1 : 0) + (querrefrigerante ? cardapio[6].preco1 : 0)
        };
        carrinho.push(pedido);
        console.log("lanche adicionado ao carrinho!\n");
    }
}
if (carrinho.length > 0) {
    console.log(`\n--- resumo do pedido de ${nome.toUpperCase()} ---`);
    console.table(carrinho);
    const totalGeral = carrinho.reduce((soma, item) => soma + item.total, 0);
    console.log(`Total geral: R$ ${totalGeral.toFixed(2)}`);
} else {
    console.log("Nenhum lanche foi pedido.");
};




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Simulador de semáforo inteligente
// ------------------------------------------------------------
// Um semáforo funciona assim:
//   - Verde  → siga (velocidade permitida: até 60 km/h)
//   - Amarelo → atenção (reduza a velocidade)
//   - Vermelho → pare
//
// a) Pergunte ao usuário - simulando os dados captados pelo radar:
//    - Cor atual do semáforo: "verde", "amarelo" ou "vermelho".
//    - Velocidade atual do veículo em km/h.
// b) Usando if/else if/else, avalie a situação:
//    - "verde" e velocidade menor ou igual que 60 → "Tudo certo. Pode seguir."
//    - "verde" e velocidade maior que 60 → "Atenção: acima do limite no sinal verde."
//    - "amarelo" → "Reduza a velocidade e prepare-se para parar."
//    - "vermelho" e velocidade maior que 0 → "PARE! Você avançou o sinal vermelho."
//    - "vermelho" e velocidade igual a 0 → "Correto. Aguarde o sinal abrir."
//    - qualquer outra cor → "Cor de semáforo inválida."
// c) Exiba o resultado com template literal.

// → Seu código aqui:


console.log("_______________________________");