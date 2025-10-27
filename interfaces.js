"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = { id: 1, nom: "Alice" };
const user2 = { id: 2, nom: "Bob", email: "bob@gmail.com" };
function afficherUser(user) {
    console.log(`ID: ${user.id}, Nom: ${user.nom}, Email: ${user.email ?? "Aucun"}`);
}
afficherUser(user1);
afficherUser(user2);
//# sourceMappingURL=interfaces.js.map