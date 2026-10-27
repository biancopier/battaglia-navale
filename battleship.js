const prompt = require("prompt-sync")();
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
    // join unisce le celle della riga con uno spazio
    const testo = riga.join(" ");
    console.log(testo);
  }
}

function piazzaNave(navi) {
  navi[2][1] = "N";
  navi[2][2] = "N";
  navi[2][3] = "N";
}

// griglia nascosta, con la nave
const navi = creaGriglia();
piazzaNave(navi);

// griglia visibile al giocatore
const campo = creaGriglia();
stampaCampo(campo);

const riga = Number(prompt("Riga (0-4): "));
const colonna = Number(prompt("Colonna (0-4): "));

console.log(riga, colonna);

function coordinateValide(riga, colonna) {
  return (
    Number.isInteger(riga) &&
    Number.isInteger(colonna) &&
    riga >= 0 &&
    riga <= DIM - 1 &&
    colonna >= 0 &&
    colonna <= DIM - 1
  );
}
console.log(
  coordinateValide(2, 1),
  coordinateValide(5, 1),
  coordinateValide("ciao", 1),
);

function cellaLibera(campo, riga, colonna) {
  // controlla che la cella sia ancora "~"
  return campo[riga][colonna] === "~";
}
console.log(cellaLibera(campo, 0, 0), cellaLibera(campo, 2, 1));

function sparaColpo(campo, navi, riga, colonna) {
  if (navi[riga][colonna] === "N") {
    campo[riga][colonna] = "X";
    return "colpito";
  } else {
    campo[riga][colonna] = "O";
    return "mancato";
  }
}

const esito = sparaColpo(campo, navi, 2, 1);

if (esito === "colpito") {
    console.log("Colpito!");
    
} else {
    console.log("Mancato!");
}


console.log(sparaColpo(campo, navi, 2, 1), sparaColpo(campo, navi, 0, 0));
stampaCampo(campo);


function navaAffondata(campo) {
    return campo[2][1] === "X" && campo[2][2] === "X" && campo[2][3] === "X";
}

console.log(navaAffondata(campo));


let colpi = 0;
let colpite = 0;

while (!navaAffondata(campo)) {
    const rigaColpo = Number(prompt("Riga (0-4): "));
    const colonnaColpo = Number(prompt("Colonna (0-4): "));
    const esito = sparaColpo(campo, navi, rigaColpo, colonnaColpo);
}