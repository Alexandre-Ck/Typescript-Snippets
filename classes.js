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
    Animal.prototype.defequer = function () {
        console.log("".concat(this.nom, " fait caca"));
    };
    return Animal;
}());
var chat = new Animal("Mimi", "chat");
chat.parler();
chat.defequer();
var chien = new Animal("Momo", "chien");
chien.parler();
chien.defequer();
// removed invalid call: Animal is not callable and Momo is not defined
