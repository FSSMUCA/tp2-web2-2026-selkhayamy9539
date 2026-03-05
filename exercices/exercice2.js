// Déclaration du tableau
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

// Parcours avec une boucle for classique
for (let i = 0; i < valeurs.length; i++) {
    
    let valeur = valeurs[i];
    let affichage;
    
    // Cas spécial : chaîne vide
    if (valeur === "") {
        affichage = "(chaine vide)";
    } else {
        affichage = String(valeur);
    }

    // Test truthy / falsy
    if (valeur) {
        console.log(affichage + " -> truthy");
    } else {
        console.log(affichage + " -> falsy");
    }
}