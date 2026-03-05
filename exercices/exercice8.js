let nom = "   Souad   "
let age = "19"
let email = "s.elkhayamy9539@uca.ac.ma"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

// nom
let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')

// age
let ageNombre = parseInt(age)
if (Number.isNaN(ageNombre) || ageNombre <= 0) {
    console.log("age              : valeur invalide")
} else {
    console.log("age              : " + ageNombre + " (valide)")
}

// email
let positionArrobase = email.indexOf("@")
let valideEmail = false

if (positionArrobase !== -1) {
    let partieApres = email.slice(positionArrobase + 1)
    if (partieApres.indexOf(".") !== -1) {
        valideEmail = true
    }
}

if (valideEmail) {
    console.log('email            : "' + email + '" (valide)')
} else {
    console.log('email            : "' + email + '" (invalide : pas de point après @)')
}

// scoreJeu
let scoreNombre = parseInt(scoreJeu)
if (Number.isNaN(scoreNombre)) {
    scoreNombre = 0
}
console.log('scoreJeu         : ' + scoreNombre + ' (extrait depuis "' + scoreJeu + '")')

// estAdmin
let adminBool = (estAdmin === "true")
console.log("estAdmin         : " + adminBool + " (conversion manuelle requise)")

// derniereConnexion
let connexion = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)')

// nombreConnexions
let nbConn = parseInt(nombreConnexions)

if (nbConn === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)')
} else {
    console.log("nombreConnexions : " + nbConn)
}

console.log("================================")