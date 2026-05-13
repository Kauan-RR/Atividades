// ============================================================
//   JOGO: Batalha por Turnos
// ============================================================
let lerTeclado = require('readline-sync');
// Um herói enfrenta uma sequência de 3 inimigos em batalhas por turnos.
// A cada turno, herói e inimigo atacam um ao outro simultaneamente.
// O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida).
//
// REGRAS:
//   - O herói começa com 100 HP.
//   - Cada inimigo é um objeto com HP, dano mínimo e dano máximo definidos em um array de inimigos.
//   - A cada turno, o herói escolhe uma ação:
//       1 – Atacar → causa dano aleatório entre seu dano mínimo e máximo
//       2 – Defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//       3 – Curar → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo deve ter por turno:
//     70% de chance de atacar → causa dano aleatório entre seu dano mínimo e máximo
//     20% de chance de defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//     10% de chance de curar  → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo ataca sempre com dano aleatório entre seu dano mínimo e dano máximo.
//   - O ataque tanto do jogador quando do inimigo devem ser realizados simultaneamente.
//   - Há uma chance de 5% do ataque (de ambos) ser um golpe crítico, causando o dobro de dano.
//     Caso isso corra, exiba que foi um dado crítico.
//   - Se o herói vencer, recupera 25 HP (sem ultrapassar 100).
//   - Se o herói perder, o jogo termina.
//
// AO FINAL DE CADA BATALHA:
//   - Exiba o resultado e a vida atual do herói.
//   - Se o herói vencer as 3 batalhas, exiba o resultado final.
//
// Após o desenvolvimento das regras base acima descritas, 
//   sinta-se livre para implementar melhorias e adicionar novos recursos.
//   - Exemplos de mecânicas adicionais:
//      - 2 tipos de armas para o herói, uma possuindo maior dano, mas possui menor precisão e a outra o inverso.
//      - Inimigos gerados aleatoriamente com atributos variados, aumentando exponencialmente a dificuldade.
//      - Sistema de níveis para o herói, permitindo que ele ganhe experiência e aumente suas habilidades.
//      - Itens e equipamentos que podem ser encontrados ou comprados (derrotar inimigos concede ouro), oferecendo bônus e habilidades especiais.
//      - Eventos aleatórios que podem ocorrer durante as batalhas, como a intervenção de aliados ou armadilhas no campo de batalha.
//
// ============================================================

// ============================================================
// HERÓI (não altere a estrutura — altere os valores se quiser)
// ============================================================

const heroi = {
    nome: "", // Deve ser preenchido pelo jogador
    hpAtual: 100,
    hpMax: 100,
    danoMin: 15,
    danoMax: 25
};

// ============================================================
// INIMIGOS (não altere a estrutura — altere os valores se quiser)
// Remova o inimigo da lista se ele for derrotado
// ============================================================

const inimigos = [
    {
        nome: "Goblin",
        hp: 30,
        danoMin: 6,
        danoMax: 12
    },
    {
        nome: "Orc Guerreiro",
        hp: 50,
        danoMin: 10,
        danoMax: 18
    },
    {
        nome: "Dragão Negro",
        hp: 80,
        danoMin: 15,
        danoMax: 25
    }
];

// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔══════════════════════════╗");
console.log("║\nBEM VINDO(A) A Magic Arenas   ║");
console.log("╚══════════════════════════╝");

// Peça o nome do herói e exiba as regras do jogo resumidamente.
// → Seu código aqui:
let nomeHeroi = lerTeclado.question("Digite o nome do seu herói: ");
heroi.nome = nomeHeroi;
console.log(`\nBem-vindo(a), ${heroi.nome}!`);
console.log(`Regras do jogo:`);
console.log(`- Você enfrentará 3 inimigos em batalhas por turnos.`);
console.log(`- A cada turno, escolha entre Atacar, Defender ou Curar (apenas 1 vez por batalha).`);
console.log(`- O inimigo também escolherá suas ações aleatoriamente.`);
console.log(`- Vença as 3 batalhas para ganhar o jogo!`);


console.log("_______________________________");

// ============================================================
// LOOP DE BATALHAS
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║    VAMOS AS BATATALHAS!    ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:
let inimigoQueMatou = ""; // Variável para registrar o algoz do herói no Game Over

for (let i = 0; i < inimigos.length; i++) {
    let inimigoAtual = inimigos[i];
    console.log(`\n=================================================`);
    console.log(`Você encontrou um ${inimigoAtual.nome}! Prepare-se para a batalha!`);

    let heroiUsouCura = false;
    let inimigoUsouCura = false;

    while (heroi.hpAtual > 0 && inimigoAtual.hp > 0) {
        console.log(`\n[ ${heroi.nome}: ${heroi.hpAtual}/${heroi.hpMax} HP ]  vs  [ ${inimigoAtual.nome}: ${inimigoAtual.hp} HP ]`);
        console.log("1 – Atacar | 2 – Defender | 3 – Curar");
        let acaoHeroi = 0;
        while (true) {
            acaoHeroi = lerTeclado.questionInt("Escolha sua acao: ");
            if (acaoHeroi === 3 && heroiUsouCura) {
                console.log("Você já usou a cura nesta batalha! Escolha 1 ou 2.");
            } else if ([1, 2, 3].includes(acaoHeroi)) {
                break;
            } else {
                console.log("Ação inválida. Digite 1, 2 ou 3.");
            }
        }

        let acaoInimigo = 1;
        let rngInimigo = Math.random() * 100;

        if (rngInimigo <= 70) {
            acaoInimigo = 1;
        } else if (rngInimigo <= 90) {
            acaoInimigo = 2;
        } else {
            if (!inimigoUsouCura) {
                acaoInimigo = 3;
            } else {
                acaoInimigo = 1;
            }
        }

        let danoDoHeroi = 0;
        let danoDoInimigo = 0;
        let logHeroi = "";
        let logInimigo = "";

        if (acaoHeroi === 1) {
            danoDoHeroi = Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin + 1)) + heroi.danoMin;
            if (Math.random() < 0.05) { // 5% de chance de crítico
                danoDoHeroi *= 2;
                logHeroi += "🎯 DADO CRÍTICO! ";
            }
        } else if (acaoHeroi === 3) {
            let cura = Math.floor(Math.random() * 11) + 10; // Entre 10 e 20
            heroi.hpAtual = Math.min(heroi.hpMax, heroi.hpAtual + cura);
            heroiUsouCura = true;
            logHeroi += `Você recuperou ${cura} HP. `;
        } else {
            logHeroi += "Você levantou seu escudo. ";
        }

        if (acaoInimigo === 1) {
            danoDoInimigo = Math.floor(Math.random() * (inimigoAtual.danoMax - inimigoAtual.danoMin + 1)) + inimigoAtual.danoMin;
            if (Math.random() < 0.05) {
                danoDoInimigo *= 2;
                logInimigo += "🎯 DADO CRÍTICO do inimigo! ";
            }
        } else if (acaoInimigo === 3) {
            let cura = Math.floor(Math.random() * 11) + 10;
            inimigoAtual.hp += cura;
            inimigoUsouCura = true;
            logInimigo += `Curou ${cura} HP. `;
        } else {
            logInimigo += "Assumiu postura defensiva. ";
        }

        if (acaoHeroi === 2 && danoDoInimigo > 0) {
            let bloqueio = Math.floor(danoDoInimigo * 0.75);
            danoDoInimigo -= bloqueio;
            logInimigo += `(Você bloqueou ${bloqueio} do dano inimigo) `;
        }
        if (acaoInimigo === 2 && danoDoHeroi > 0) {
            let bloqueio = Math.floor(danoDoHeroi * 0.75);
            danoDoHeroi -= bloqueio;
            logHeroi += `(Inimigo bloqueou ${bloqueio} do seu dano) `;
        }

        if (danoDoHeroi > 0) {
            inimigoAtual.hp -= danoDoHeroi;
            logHeroi += `Causou ${danoDoHeroi} de dano!`;
        }
        if (danoDoInimigo > 0) {
            heroi.hpAtual -= danoDoInimigo;
            logInimigo += `Causou ${danoDoInimigo} de dano!`;
        }

        console.log(`\n--- RESULTADOS DO TURNO ---`);
        console.log(`[Você]: ${logHeroi}`);
        console.log(`[${inimigoAtual.nome}]: ${logInimigo}`);
    }

    if (heroi.hpAtual <= 0) {
        inimigoQueMatou = inimigoAtual.nome;
        break;
    } else {
        console.log(`\n🏆 Você derrotou o ${inimigoAtual.nome}!`);

        // Recupera 25 HP
        let vidaRecuperada = Math.min(25, heroi.hpMax - heroi.hpAtual);
        heroi.hpAtual += vidaRecuperada;

        if (vidaRecuperada > 0) {
            console.log(`Você encontrou um fôlego extra e recuperou ${vidaRecuperada} HP. (Sua vida: ${heroi.hpAtual}/${heroi.hpMax})`);
        } else {
            console.log(`Sua vida já está cheia! (${heroi.hpAtual}/${heroi.hpMax})`);
        }


        inimigos.splice(i, 1);
        i--;
    }
}

console.log("\n_______________________________\n");

console.log("_______________________________");

// ============================================================
// RESULTADO FINAL
// ============================================================
//
// PASSO 5 – Após o for de batalhas:
//
//   a) Se heroi.hp > 0 (venceu todas as batalhas):
//        Exiba:
//        "══════════════════════════════"
//        "VOCÊ VENCEU O JOGO!"
//        "<heroi.nome> sobreviveu a todas as batalhas!"
//        "HP final: <heroi.hp>/<heroi.hpMax>"
//        "══════════════════════════════"
//
//   b) Se heroi.hp <= 0 (foi derrotado):
//        Exiba:
//        "══════════════════════════════"
//        "GAME OVER"
//        "<heroi.nome> caiu em batalha contra o <nome do inimigo>"
//        "══════════════════════════════"

// → Seu código aqui:

if (heroi.hpAtual > 0) {
    console.log("══════════════════════════════");
    console.log("VOCÊ VENCEU O JOGO!");
    console.log(`${heroi.nome} sobreviveu a todas as batalhas!`);
    console.log(`HP final: ${heroi.hpAtual}/${heroi.hpMax}`);
    console.log("══════════════════════════════");
} else {
    console.log("══════════════════════════════");
    console.log("GAME OVER");
    console.log(`${heroi.nome} caiu em batalha contra o(a) ${inimigoQueMatou}`);
    console.log("══════════════════════════════");
}