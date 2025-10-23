export {};

function addition(a: number, b: number): number {
    return a + b;
}

// Paramètre optionnel
function saluer2(nom?: string): void {
    if (nom) console.log(`Salut ${nom}`);
    else console.log("Salut inconnu !");
}

console.log(addition(4, 5));
saluer2();
saluer2("Alex");
