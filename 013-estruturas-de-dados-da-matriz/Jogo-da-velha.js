let lerTeclado = require('readline-sync');
console.log("\nBem vindo ao jogo da velha!");
console.log("As regras são bem simples, você escolhe entre X ou O e a cada rodada você escolhe um quadrado aonde assinalar, se marcar o que você escolheu 3 vezes na mesma linha ou diagonal você ganha caso contrario você perde. Se ambos os jogadores não conseguirem, então o jogo da velha e voces empatam. ");
const Tabuleiro = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let rodando = true;
let jogador = "X"
do {
    console.log(Tabuleiro[0]);
    console.log(Tabuleiro[1]);
    console.log(Tabuleiro[2]);

    let l = lerTeclado.question("Jogador" + jogador + "-Linha");
    let c = lerTeclado.question("Jogador" + jogador + "-Coluna");
    if (Tabuleiro[l][c] === 0) {
        Tabuleiro[l][c] = jogador;
        let alguemGanhou = false
        for (let i = 0; i < 3; i++) {
            if (Tabuleiro[i][0] === jogador && Tabuleiro[i][0] === jogador && Tabuleiro[i][1] === jogador && Tabuleiro[i][1] === jogador && Tabuleiro[i][2]) {
                console.log("Jogador" + jogador + "Ganhou");
                alguemGanhou = true;
            } if (Tabuleiro[0][i] === jogador && Tabuleiro[0][i] === jogador && Tabuleiro[1][i] === jogador && Tabuleiro[1][i] === jogador && Tabuleiro[2][i]) {
                console.log("Jogador" + jogador + "Ganhou");
                alguemGanhou = true;
            } if (!alguemGanhou) {

                if (Tabuleiro[0][0] === jogador && Tabuleiro[0][0] === jogador && Tabuleiro[1][1] === jogador && Tabuleiro[1][1] === jogador && Tabuleiro[2][2]) {
                    console.log("Jogador" + jogador + "Ganhou");
                    alguemGanhou = true;
                } if (Tabuleiro[0][2] === jogador && Tabuleiro[0][2] === jogador && Tabuleiro[1][1] === jogador && Tabuleiro[1][1] === jogador && Tabuleiro[2][0]) {
                    console.log("Jogador" + jogador + "Ganhou");
                    alguemGanhou = true;
                }
            } if (alguemGanhou) {
                console.log("Jogador" + jogador + "Ganhou");
                rodando = false;
            } else {
                let temZero = false;
                for (let linha of Tabuleiro) {
                    for (let casa of linha) {
                        if (casa === 0) {
                            temZero = true;
                        }
                    }
                } if (temZero === false) {
                    console.log("deu velha")
                    alguemGanhou = true;
                } else {

                } if (jogador === "X") {
                    jogador = "O";
                } else {
                    jogador = "X";
                }
            }
        }
    } else {
        console.log("ja tem coisa ai escolha outro");

    }
} while (rodando);

