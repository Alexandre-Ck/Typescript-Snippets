"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addition(a, b) {
    return a + b;
}
// Paramètre optionnel
function saluer2(nom) {
    if (nom)
        console.log(`Salut ${nom}`);
    else
        console.log("Salut inconnu !");
}
console.log(addition(4, 5));
saluer2();
saluer2("Alex");
//# sourceMappingURL=fonctions.js.map