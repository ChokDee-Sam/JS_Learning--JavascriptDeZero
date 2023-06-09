/* Object */

/* Documentation MDN du type Object */

// Object.assign(target, source)=>  copie les propriétés/valeur d'un objet dans un autre
// Object.entries(nomObjet)     =>  renvoie un tableau de chaque paire (propriété/valeur) d'un objet
// Object.keys(nomObjet)        =>  renvoie un tableau contenant les noms des propriétés d'un objet
// Object.values(nomObjet)      =>  renvoie un tableau contenant les valeurs d'un objet


/* Rappel : création d'un objet (notation littérale) */
let personne = {
  prenom: "Tom",
  nom: "Redocemia",
};
// console.log(personne);

/* Création d'un objet avec le constructeur Object */
let objet = new Object();
objet.prenom = "Tom";
objet.nom = "Redocemia";
// console.log(objet);

/* Wrapper dynamiquement une valeur primitive */
// let chaine = new Object("Tom");
// console.log(chaine);
// let nombre = new Object(42);
// console.log(nombre);
// let booleen = new Object(true);
// console.log(booleen);

/* Méthodes statiques (boîte à outils) */
let profil = {
  prenom: "Tom",
  nom: "Redocemia",
};
let naissance = {
  jour: 24,
  mois: "janvier",
  // annee: 2002,
};
console.log(profil);

// Copie des propriétés d'un objet vers un autre
// Object.assign(profil, naissance);
console.log(profil);

naissance.cliniqueMaternité = "Alger";
Object.assign(profil, naissance);

console.log(naissance);
console.log(profil);

// Lister les propriétés et valeurs
// console.log("Les paires clés/valeurs sont :", Object.entries(profil));
// console.log("Les clés sont :", Object.keys(profil));
// console.log("Les valeurs sont :", Object.values(profil));

/* Méthodes simples à connaître */

/* Exercices */

/* Prochaine leçon */
