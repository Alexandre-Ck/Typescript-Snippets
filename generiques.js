"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(nom, espece) {
        this.nom = nom;
        this.espece = espece;
    }
    Animal.prototype.parler = function () {
        console.log("".concat(this.nom, " est un ").concat(this.espece));
    };
    return Animal;
}());
var chat = new Animal("Mimi", "chat");
chat.parler();
// Ajout d'une nouvelle instance
var chien = new Animal("Rex", "chien");
chien.parler();
