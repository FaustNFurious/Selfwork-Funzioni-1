// Dichiarazione Variabili
let dicePlayer1 = parseInt(prompt("Giocatore 1: Indicare quante volte tirare il dado"));
let dicePlayer2 = parseInt(prompt("Giocatore 2: Indicare quante volte tirare il dado"));
let totDice = 0;

// Istruzioni per formulare la frase = "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“
function sommaTiroDadi(number) {

    for (let i = 1; i <= number; i++) {
        totDice = totDice + Math.floor(Math.random()*(6-1) + 1);
        console.log(`Al tiro n°${i} il punteggio è ${totDice}`);

    }

}

let sommaPlayer1 = sommaTiroDadi(dicePlayer1);
let sommaPlayer2 = sommaTiroDadi(dicePlayer2);