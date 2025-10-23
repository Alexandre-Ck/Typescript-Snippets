export {}; // transforme le fichier en module pour éviter les conflits

// Variables avec types
let prenom: string = "Alex";
let age: number = 25;
let estActif: boolean = true;

// Tableaux
let nombres: number[] = [1, 2, 3];
let melange: (number | string)[] = [1, "deux", 3];

// Objet typé
let personne: { nom: string; age: number } = {
    nom: "Alexandre",
    age: 30
};

// Fonction typée
function saluer(nom: string): string {
    return `Bonjour ${nom} !`;
}

console.log(saluer(prenom));
console.log(nombres, melange, personne, estActif);
