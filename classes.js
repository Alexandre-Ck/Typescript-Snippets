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
    defequer() {
        console.log(`${this.nom} fait caca`);
    }
}
const chat = new Animal("Mimi", "chat");
chat.parler();
chat.defequer();
const chien = new Animal("Momo", "chien");
chien.parler();
chien.defequer();
//# sourceMappingURL=classes.js.map