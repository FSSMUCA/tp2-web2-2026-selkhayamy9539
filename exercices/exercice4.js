let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
]

let compteur = 0

for (let i = 0; i < paires.length; i++) {

    let v1 = paires[i][0]
    let v2 = paires[i][1]

    let egalSimple = (v1 == v2)
    let egalStrict = (v1 === v2)

    console.log(String(v1) + " == " + String(v2) + 
        " -> " + egalSimple + 
        " | " + 
        String(v1) + " === " + String(v2) + 
        " -> " + egalStrict)

    if (egalSimple === true && egalStrict === false) {
        compteur++
    }
}
console.log("---")
console.log(compteur + " paire(s) où == et === donnent des résultats différents")
