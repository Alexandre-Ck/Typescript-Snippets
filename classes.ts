export {};

class Animal {
    constructor(public nom: string, private espece: string) {}

    
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

const chien= new Animal("Momo", "chien");
chien.parler();
chien.defequer();
