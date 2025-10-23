export {};

class Animal {
    constructor(public nom: string, private espece: string) {}

    parler() {
        console.log(`${this.nom} est un ${this.espece}`);
    }
}

const chat = new Animal("Mimi", "chat");
chat.parler();

// Ajout d'une nouvelle instance
const chien = new Animal("Rex", "chien");
chien.parler();

