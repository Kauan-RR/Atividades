
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui: 

var nomePessoa = "Kauan"
let idade = 21
let linguagem = 'ler manga ou manhwa'
let tampletestring = `Eu leio ${linguagem} quase todos os dias`
console.log(nomePessoa,idade);
console.log(linguagem);
console.log(tampletestring)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let linguagem2 ='batata';
let number = 45
let eucomiabatata = true
let semvalor
let pessoatriste = null
let templatespring = `eu comia ${number} ${linguagem2} ${eucomiabatata} ${semvalor} ${pessoatriste} fim `
console.log(linguagem2)
console.log(number)
console.log(eucomiabatata)
console.log(semvalor)
console.log(pessoatriste)
console.log(templatespring)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = 'Barry,'
let idade1 = 25
let linguagem3 = 'anos,'
let cidade = 'centralcity,'
let missão = 'salvar o mundo.'
let templatestring = `${personagem}, ${idade1} years era um cientista forense da policia de ${cidade}, conhecido por ser lento e metodico. Certa noite, um raio atingiu seu labolatorio, banhando-o em produtos quimicos. ele sobreviveu e ganhaou super velocidade, assumindo o nome de Flash em homenagem ao seu hetoi de infancia, Jay Garrick.`
console.log(personagem, idade1, linguagem3, cidade, missão, templatestring);  


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

let nomepessoa2 = 'Kauan';
let objetivo = "Estudar muito e conseguir uma vaga de dev,"
let templatestring1 = `Você vai ${objetivo} você tem o potencial necessario para isso, não desista apesar das adversidades, se Deus te permitiu sonhar e porque ele sabe que você consgue.  `
console.log(nomepessoa2, objetivo, templatestring1) 


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui: 

console.log(


    `
=========================================
            Sistema do usuario
=========================================
1   -   Ver Perfil
2   -   Editar Perfil
3   -   Configurações
4   -   Notificações
5   -   Relatórios
6   -   Ajuda
7   -   Sobre o Sistema
0   -   Sair
=========================================
Digite o número da opção desejada
=========================================

`
);
    



console.log("_______________________________");