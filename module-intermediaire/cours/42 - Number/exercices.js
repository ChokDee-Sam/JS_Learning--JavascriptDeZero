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
