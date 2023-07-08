/*
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com
 */

/*****************************************************************************
 *          📣 OYEZ OYEZ BRAVES DÉVELOPPEURS ET DÉVELOPPEUSES ! 📣            *
 *****************************************************************************
 *
 * Maintenant que vous êtes dans le module intermédiaire, vous serez un peu moins
 * assisté dans les exercices. La plupart du temps vous devrez partir de zéro.
 *
 * Ce n'est pas pour rien que ma formation s'appelle JavaScript de Zéro !
 *
 * Quelques nouveautés concernant les exercices dans ce module :
 * ✅ Vous pouvez faire les exercices dans n'importe quel ordre 👌 (je vous
 * recommande tout de même de les faire dans l'ordre, la difficulté est croissante).
 * ✅ J'affiche dans le navigateur Chrome le nombre de tests réussis pour l'exercice
 * en cours, ça devrait vous motiver pour terminer les exercices récalcitrants.
 *
 * Merci et bon courage ! 🤘
 */

//  Number.isNaN()          =>  (true / false)    permet de savoir si ce n'est pas un nombre
//  Number.isFinite()       =>  (true / false)    permet de savoir si c'est un nombre fini
//  Number.isInteger()      =>  (true / false)    permet de savoir si c'est un nombre entier
//  Number.isSafeInteger()  =>  (true / false)    permet de savoir si c'est un nombre safe (compris entre le min et max de JS)

//  Number.parseFloat()     =>  Renvoie le nombre [à virgule] au début de la chaine, et NaN si cette chaine ne commence pas par une nombre
//  Number.parseInt()       =>  Renvoie le nombre [entier] au début de la chaine et NaN si cette chaine ne commence pas par une nombre.

//  valeur.toFixed()()      =>  Formate un nombre en notation à point-fixe (2 chiffres après la virgule)
//  Number.toString()       =>  Renvoie une chaîne de caractère représentant l'objet Number.

// Exercice 0
// Créez la fonction isNaN0(valeur) ci-dessous.
function isNaN0(valeur) {
  return Number.isNaN(valeur);
}

// Exercice 1
// Créez la fonction isFinite0(valeur) ci-dessous.
function isFinite0(valeur) {
  return Number.isFinite(valeur);
}

// Exercice 2
// Créez la fonction isInteger0(valeur) ci-dessous.
function isInteger0(valeur) {
  return Number.isInteger(valeur);
}

// Exercice 3
// Créez la fonction isSafeInteger0(valeur) ci-dessous.
function isSafeInteger0(valeur) {
  return Number.isSafeInteger(valeur);
}

// Exercice 4
// Créez la fonction parseFloat0(chaine) ci-dessous.
function parseFloat0(chaine) {
  return Number.parseFloat(chaine);
}

// Exercice 5
// Créez la fonction parseInt0(chaine) ci-dessous.
function parseInt0(chaine) {
  return Number.parseInt(chaine);
}

// Exercice 6
// Créez la fonction parseInt1(binaire) ci-dessous.
function parseInt1(binaire) {
  return Number.parseInt(binaire, 2);
}

// Exercice 7
// Créez la fonction parseInt2(hexa) ci-dessous.
function parseInt2(hexa) {
  return Number.parseInt(hexa, 16);
}

// Exercice 8
// Créez la fonction toFixed0(valeur) ci-dessous.
function toFixed0(valeur) {
  return valeur.toFixed(3);
}

// Exercice 9
// Créez la fonction toString0(valeur) ci-dessous.
function toString0(valeur) {
  return valeur.toString();
}

// Exercice 10
// Créez la fonction toString1(nombre) ci-dessous.
function toString1(nombre) {
  return nombre.toString(2);
}

// Exercice 11
// Créez la fonction toString2(nombre) ci-dessous.
function toString2(nombre) {
  return nombre.toString(16);
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Décodeur
// Créez la fonction decodeur(secret) ci-dessous.
function decodeur(secret) {
  let message = "";

  // On incrémente de 8 unités pour découper par bloc de 8 chiffres
  for (let i = 0; i < secret.length; i += 8) {
    // On découpe 8 caractères
    let binaire = secret.slice(i, i + 8);
    // On convertit en base 10 le binaire qui est en base 2
    let nombre = Number.parseInt(binaire, 2);
    // On ajoute au résultat la lettre correspondante au nombre
    message += String.fromCharCode(nombre);
  }
  return message;
}

// Exercice 1 — Encodeur
// Créez la fonction encodeur(message) ci-dessous.
function encodeur(message) {
  let messageAvecCode = "";

  // Pour chaque caractère du message...
  for (let i = 0; i < message.length; i++) {
    // On récupère le nombre correspondant à chaque caractère
    let lettreCode = message.charCodeAt([i]);

    // On le convertit en binaire
    let codeBinaire = lettreCode.toString(2);

    // On ajoute les 0 devant pour faire 8 chiffres et on ajoute
    // au résultat avec += (concaténation)
    messageAvecCode += codeBinaire.padStart(8, "0");
  }

  return messageAvecCode;
}

// Exercice 2 — Panier de fruits
// Créez la fonction totalPanier(commandes) ci-dessous.
function totalPanier(commandes) {
  // On retiendra l'ordre des fruits dans ce tableau, on y stockera
  // chaque nom de fruit (une seule fois) rencontré dans les commandes
  let ordreDesFruits = [];

  // Chaque somme de fruits sera stockée dans un objet. Le nom
  // du fruit sera le nom de la propriété dont la valeur sera la
  // quantité totale des commandes de ce fruit.
  // Par exemple : sommeCommandes = { "pommes": 20, "cerises": 12 }
  let sommeCommandes = {};

  // On découpe chaque énumération de fruit des commandes...
  let commandeParFruit = commandes.split(",");

  // Pour chaque commande de fruit...
  for (let i = 0; i < commandeParFruit.length; i++) {
    // On extrait la quantité et le nom du fruit
    // commandeParFruit[i] vaut par exemple "45 pommes"
    let quantiteEtNom = commandeParFruit[i].split(" ");

    // quantiteEtNom vaut ["45", "pommes"]
    let quantite = quantiteEtNom[0];
    let nom = quantiteEtNom[1];

    // Etape 1 : on sauvegarde ce nouveau fruit dans ordreDesFruits.
    // Si le nom de ce fruit n'est pas contenu dans notre tableau
    // ordreDesFruits, alors on l'ajoute
    if (!ordreDesFruits.includes(nom)) {
      ordreDesFruits.push(nom);
    }

    // Etape 2 : on ajoute la quantité de cette commande à la
    // quantité de fruits déjà connue. Cas particulier : si c'est
    // la 1ère fois qu'on voit ce fruit, il faut l'ajouter à notre
    // objet sommeCommandes.

    // On vérifie si on a déjà vu ce fruit. Quand on essaye
    // d'accéder à une propriété qui n'existe pas sur un objet, ça
    // renvoie undefined.
    // Si on n'a jamais enregistré ce fruit dans sommeCommandes...
    if (sommeCommandes[nom] === undefined) {
      // ... on l'ajoute à l'objet sommeCommandes avec sa quantité
      // initiale. Attention quantite est une chaîne de caractères,
      // il faut la convertir en nombre
      sommeCommandes[nom] = Number(quantite);
    } else {
      // sinon, si on a déjà vu ce fruit, on ajoute la nouvelle
      // quantité à la somme déjà existante avec l'opérateur '+='.
      // Attention quantite est une chaîne de caractères, il faut
      // la convertir en nombre pour faire l'addition
      sommeCommandes[nom] += Number(quantite);
    }
  }

  // Etape 3, on affiche dans l'ordre toutes les sommes, pour ça
  // on utilise notre ordreDesFruits pour récupérer chaque nom
  // de fruit à utiliser sur sommeCommandes.
  let resultat = [];

  // Pour chaque fruit dans l'ordre...
  for (let i = 0; i < ordreDesFruits.length; i++) {
    let nomDuFruit = ordreDesFruits[i];

    // On ne doit afficher que les fruits dont la quantité est > 0
    if (sommeCommandes[nomDuFruit] > 0) {
      // On ajoute au tableau résultat par exemple "45 pommes"
      resultat.push(`${sommeCommandes[nomDuFruit]} ${nomDuFruit}`);
    }
  }

  // Etape 4 : on retourne la chaîne de caractères finale en CSV
  return resultat.join(",");
}
