const DIM = 5;

function creaGriglia() {
    const griglia = [];

    for (let r = 0; r < DIM; r++) {
        const riga = [];

        for (let c = 0; c < DIM; c++) {
            riga.push("~");
        }

        griglia.push(riga);
    }

    return griglia;
}

function stampaCampo(griglia) {
    for (const riga of griglia) {
        const testo = riga.join(" ");
        // scrivi tu la riga che stampa testo
        console.log(testo);
    }
}

stampaCampo(creaGriglia());