export {};

interface Utilisateur {
    id: number;
    nom: string;
    email?: string; // facultatif
}

const user1: Utilisateur = { id: 1, nom: "Alice" };
const user2: Utilisateur = { id: 2, nom: "Bob", email: "bob@gmail.com" };

function afficherUser(user: Utilisateur) {
    console.log(`ID: ${user.id}, Nom: ${user.nom}, Email: ${user.email ?? "Aucun"}`);
}

afficherUser(user1);
afficherUser(user2);
