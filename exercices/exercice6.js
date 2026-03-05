let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let variables = [
    ["nom", nom],
    ["age", age],
    ["ville", ville],
    ["score", score],
    ["actif", actif]
]

// Partie A
for (let i = 0; i < variables.length; i++) {
    console.log(
        variables[i][0] + " ?? \"valeur par défaut\" -> " +
        (variables[i][1] ?? "valeur par défaut")
    )
}

console.log("")

// Partie B
for (let i = 0; i < variables.length; i++) {
    console.log(
        variables[i][0] + " || \"valeur par défaut\" -> " +
        (variables[i][1] || "valeur par défaut")
    )
}

console.log("")

// Partie C
for (let i = 0; i < variables.length; i++) {

    let r1 = variables[i][1] ?? "valeur par défaut"
    let r2 = variables[i][1] || "valeur par défaut"

    if (r1 === r2) {
        console.log(variables[i][0] + " : ?? et || -> même résultat")
    } else {
        console.log(variables[i][0] + " : ?? et || -> résultat différent")
    }
}