"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variables avec types
let prenom = "Alex";
let age = 25;
let estActif = true;
let rien = null;

// Tableaux
let nombres = [1, 2, 3];
let melange = [1, "deux", 3];
// Objet typé
let personne = {
    nom: "Alexandre",
    age: 30
};
// Fonction typée
function saluer(nom) {
    return `Bonjour ${nom} !`;
}
function donnerAge(age) {
    console.log(`Vous avez ${age} ans.`);
}
console.log(donnerAge(age));
console.log(saluer(prenom));
console.log(nombres, melange, personne, estActif);
//# sourceMappingURL=base.js.map