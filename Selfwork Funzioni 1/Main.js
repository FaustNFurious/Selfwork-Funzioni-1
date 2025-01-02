// Funzione per la somma dei tiri dei dadi
function sommaTiroDadi(number) {
    // Dichiarazione Variabili
    let totDice1 = 0;
    let totDice2 = 0;

    for (let i = 1; i <= number; i++) {
        // Dichiarazione lanci random
        let rollRandom1 = Math.floor(Math.random() * (6-1) + 1);
        let rollRandom2 = Math.floor(Math.random() * (6-1) + 1);

        totDice1 = totDice1 + rollRandom1;
        totDice2 = totDice2 + rollRandom2;

        console.log(`Giocatore 1: Al tiro n°${i} il punteggio è ${totDice1}`);
        console.log(`Giocatore 2: Al tiro n°${i} il punteggio è ${totDice2}`);

    }

    if (totDice1 > totDice2) {
        return `Vince il Giocatore 1 totalizzando ${totDice1} punti`;
    }

    else if (totDice1 < totDice2) {
        return `Vince il Giocatore 2 totalizzando ${totDice2} punti`;
    }

    else {
        return `Entrambi i giocatori pareggiano totalizzando ${totDice1} punti`;
    }

}

// Numero di lanci dei dadi inserito dall'utente
let dicePlayers = parseInt(prompt("Indicare quante volte tirare il dado"));

let sommaPlayers = sommaTiroDadi(dicePlayers);
console.log(sommaPlayers);
