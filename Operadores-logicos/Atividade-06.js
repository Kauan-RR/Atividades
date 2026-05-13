// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================
let lerTeclado = require('readline-sync');
// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:

let combinação1 = true && true;
let combinação2 = true && false;
let combinação3 = false && true;
let combinação4 = false && false;
console.log("true && true → ", combinação1);
console.log("true && false →", combinação2);
console.log("false && true →", combinação3);
console.log("false && false →", combinação4);




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:

let combinação8 = true || true;
let combinação7 = true || false;
let combinação6 = false || true;
let combinação5 = false || false;
console.log("true || true → ", combinação8);
console.log("true || false→", combinação7);
console.log("false || true→", combinação6);
console.log("false || false→", combinação5);






console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:


let sistemaActive = true;
let modoManutenção = !true;
let lugarVago = false;
let lugarOcupado = !false;

console.log(sistemaActive, modoManutenção, lugarVago, lugarOcupado);





console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:

let qualSeupeso = lerTeclado.question("qual seu peso ?");
let qualSuaAltura = lerTeclado.questionInt("qual sua altura ?");
console.log(qualSeupeso, qualSuaAltura);
let usuario = {
    peso: qualSeupeso,
    altura: qualSuaAltura,
    imc: qualSeupeso / (qualSuaAltura ** 2),
    imcAbaixoDoPeso: (qualSeupeso / (qualSuaAltura ** 2)) < 18.5,
    imcNormal: (qualSeupeso / (qualSuaAltura ** 2)) >= 18.5 && (qualSeupeso / (qualSuaAltura ** 2)) <= 24.9,
    imcAcimaDoPeso: (qualSeupeso / (qualSuaAltura ** 2)) >= 25 && (qualSeupeso / (qualSuaAltura ** 2)) <= 29.9
};

console.log(usuario.imc);
console.log(usuario.imcAbaixoDoPeso);
console.log(usuario.imcNormal);
console.log(usuario.imcAcimaDoPeso);






console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:

let notaFinal = 4.8;
let precisaDerecuperacao = notaFinal >= 4 && notaFinal < 6;
let reeprovado = notaFinal < 4;
let precisaDeAjuda = precisaDerecuperacao || reeprovado;
console.log(precisaDerecuperacao);
console.log(reeprovado);
console.log(precisaDeAjuda);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:
let temperatura = 38.2;
let diagnostico = temperatura >= 37.6 ? "Febre detectada" : "Temperatura normal";
console.log(`Temperatura: ${temperatura}°C - ${diagnostico}`);






console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:
let velocidade = 110;
let limiteVelocidade = 100;
let statusMulta = velocidade > limiteVelocidade ? "Multa aplicada" : "Velocidade regular";
console.log(`Velocidade: ${velocidade} km/h - ${statusMulta}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:

let ehEstudante = lerTeclado.keyInYN("Você é bolsista? ");
let pagaMaisDeMil = lerTeclado.keyInYN("Você paga mais que R$ 1000,00 mensais pelo curso? ");
let mensagem = ehEstudante && pagaMaisDeMil ? "Desconto aplicado!" : "Desconto não aplicado.";
console.log(mensagem);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:
let usuario2 = {
    idade: lerTeclado.questionInt("Qual sua idade? "),
    possuiIngresso: lerTeclado.keyInYN("Você possui ingresso? "),
    ehAssociado: lerTeclado.keyInYN("Você é associado ao clube? ")
};

let verificacoes = {
    podeEntrarNormal: (usuario2.idade >= 18 && usuario2.possuiIngresso) || usuario2.ehAssociado,
    podeEntrarSocio: usuario2.possuiIngresso && usuario2.ehAssociado,
    precisaAcompanhante: usuario2.idade < 18,
    naoPodeEntrar: !usuario2.possuiIngresso && !usuario2.ehAssociado
};
let mensagemFinal = verificacoes.podeEntrarNormal || verificacoes.podeEntrarSocio ? "Entrada liberada!" : "Entrada negada.";
console.log(mensagemFinal);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

let produto = {
    nome: lerTeclado.question("Nome do produto: "),
    quantidadeEmEstoque: lerTeclado.questionInt("Quantidade em estoque: "),
    estaAtivo: lerTeclado.keyInYN("O produto está ativo no sistema? ")
};
produto.temEstoque = produto.quantidadeEmEstoque > 0;
produto.produtoDisponivel = produto.temEstoque && produto.estaAtivo;
produto.produtoIndisponivel = !produto.temEstoque || !produto.estaAtivo;
console.log(`Produto: ${produto.nome}`);
console.log(`Quantidade em estoque: ${produto.quantidadeEmEstoque}`);
console.log(`Produto ativo? ${produto.estaAtivo ? "Sim" : "Não"}`);
console.log(`Tem estoque? ${produto.temEstoque ? "Sim" : "Não"}`);
console.log(`Produto disponível? ${produto.produtoDisponivel ? "Sim" : "Não"}`);
console.log(`Produto indisponível? ${produto.produtoIndisponivel ? "Sim" : "Não"}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

let usuario3 = {
    ehAdmin: lerTeclado.keyInYN("Você é administrador? "),
    estaLogado: lerTeclado.keyInYN("Você está logado? "),
}
usuario3.contaAtiva = lerTeclado.keyInYN("Sua conta está ativa? ");
usuario3.acessoSistema = usuario3.estaLogado && usuario3.contaAtiva;
usuario3.acessoAdmin = usuario3.acessoSistema && usuario3.ehAdmin;
usuario3.acessoNegado = !usuario3.estaLogado || !usuario3.contaAtiva;
console.log(`Acesso ao sistema? ${usuario3.acessoSistema ? "Sim" : "Não"}`);
console.log(`Acesso de administrador? ${usuario3.acessoAdmin ? "Sim" : "Não"}`);
console.log(`Acesso negado? ${usuario3.acessoNegado ? "Sim" : "Não"}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:

let credenciaisSistema = {
    usuario: "admin",
    senha: "1234"
};

let usuarioDigitado = lerTeclado.question("Digite o usuário: ");
let senhaDigitada = lerTeclado.question("Digite a senha: ");

let usuarioCorreto = usuarioDigitado === credenciaisSistema.usuario;
let senhaCorreta = senhaDigitada === credenciaisSistema.senha;
let loginValido = usuarioCorreto && senhaCorreta;

console.log(loginValido ? "Login realizado com sucesso!" : "Usuário ou senha incorretos.");

console.log("_______________________________");