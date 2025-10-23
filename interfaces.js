"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = { id: 1, nom: "Alice" };
var user2 = { id: 2, nom: "Bob", email: "bob@gmail.com" };
function afficherUser(user) {
    var _a;
    console.log("ID: ".concat(user.id, ", Nom: ").concat(user.nom, ", Email: ").concat((_a = user.email) !== null && _a !== void 0 ? _a : "Aucun"));
}
afficherUser(user1);
afficherUser(user2);
