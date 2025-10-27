"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nom;
    espece;
    constructor(nom, espece) {
        this.nom = nom;
        this.espece = espece;
    }
    parler() {
        console.log(`${this.nom} est un ${this.espece}`);
    }
}
const chat = new Animal("Mimi", "chat");
chat.parler();
// Ajout d'une nouvelle instance
const chien = new Animal("Rex", "chien");
chien.parler();
//# sourceMappingURL=generiques.js.map