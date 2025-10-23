"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variables avec types
var prenom = "Alex";
var age = 25;
var estActif = true;
// Tableaux
var nombres = [1, 2, 3];
var melange = [1, "deux", 3];
// Objet typé
var personne = {
    nom: "Alexandre",
    age: 30
};
// Fonction typée
function saluer(nom) {
    return "Bonjour ".concat(nom, " !");
}
console.log(saluer(prenom));
console.log(nombres, melange, personne, estActif);
