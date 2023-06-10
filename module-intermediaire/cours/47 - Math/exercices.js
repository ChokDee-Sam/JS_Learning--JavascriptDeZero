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

// Math.abs()       =>  retourne la valeur absolue d'un nombre
// Math.ceil()      =>  retourne le plus petit entier supérieur ou égal au nombre donné
// Math.floor()     =>  retourne le plus grand entier qui est inférieur ou égal à un nombre
// Math.round()     =>  retourne la valeur d'un nombre arrondi à l'entier le plus proche.
// Math.trunc()     =>  retourne la troncature entière d'un nombre en retirant sa partie décimale

// Math.random()    =>  renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (1 exclus)

// Math.max(a,b)    =>  renvoie le plus grand nombre parmi ceux passés en paramètres,
//                      ou -Infinity si aucun     paramètre n'est fourni.
// Math.min(a,b)    =>  renvoie le plus petit nombre d'une série de 0 ou plusieurs nombres,
//                      ou bien NaN si au moins un des arguments fourni n'est pas un nombre
//                      ou ne peut pas être converti en nombre.

// Math.pow(10, 2)  =>  renvoie un nombre à une certaine puissance
// Math.hypot(x,y)  =>  renvoie la racine carrée de la somme des carrés de ses arguments
// Math.sign()      =>  renvoie le signe d'un nombre et permet de savoir si un nombre est positif, négatif ou nul

// Exercice 0
// Créez la fonction abs0(nombre) ci-dessous.
function abs0(nombre) {
  return Math.abs(nombre);
}

// Exercice 1
// Créez la fonction ceil0(nombre) ci-dessous.
function ceil0(nombre) {
  return Math.ceil(nombre);
}

// Exercice 2
// Créez la fonction floor0(nombre) ci-dessous.
function floor0(nombre) {
  return Math.floor(nombre);
}

// Exercice 3
// Créez la fonction hypot0(cote1, cote2) ci-dessous.
function hypot0(cote1, cote2) {
  return Math.hypot(cote1, cote2);
}

// Exercice 4
// Créez la fonction hypot1(nombre1, nombre2, nombre3) ci-dessous.
// function hypot1(nombre1, nombre2, nombre3) {
//     return Math.hypot(nombre1, nombre2, nombre3);
//   }

// Exercice 5
// Créez la fonction max0(nombre1, nombre2) ci-dessous.
function max0(nombre1, nombre2) {
  return Math.max(nombre1, nombre2);
}

// Exercice 6
// Créez la fonction max1(nombre1, nombre2, nombre3) ci-dessous.
function max1(nombre1, nombre2, nombre3) {
  return Math.max(nombre1, nombre2, nombre3);
}

// Exercice 7
// Créez la fonction min0(nombre1, nombre2) ci-dessous.
function min0(nombre1, nombre2) {
  return Math.min(nombre1, nombre2);
}

// Exercice 8
// Créez la fonction min1(nombre1, nombre2, nombre3) ci-dessous.
function min1(nombre1, nombre2, nombre3) {
  return Math.min(nombre1, nombre2, nombre3);
}

// Exercice 9
// Créez la fonction pow0(nombre, puissance) ci-dessous.
function pow0(nombre, puissance) {
  return Math.pow(nombre, puissance);
}

// Exercice 10
// Créez la fonction random0(limiteHaute) ci-dessous.
function random0(limiteHaute) {
  return Math.random(limiteHaute);
}

// Exercice 11
// Créez la fonction random1(limiteBasse, limiteHaute) ci-dessous.
function random1(limiteBasse, limiteHaute) {
  return limiteBasse + Math.random() * (limiteHaute - limiteBasse);
}

// Exercice 12
// Créez la fonction round0(nombre) ci-dessous.
function round0(nombre) {
  return Math.round(nombre);
}

// Exercice 13
// Créez la fonction sign0(nombre) ci-dessous.
function sign0(nombre) {
  return Math.sign(nombre);
}

// Exercice 14
// Créez la fonction trunc0(nombre) ci-dessous.
function trunc0(nombre) {
  return Math.trunc(nombre);
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Thermomètre endommagé
// Créez la fonction corrigerTemp(liste) ci-dessous.
function corrigerTemp(liste) {
  let temperaturePrecedente = -54;
  let resultat = [];

  for (let i = 0; i < liste.length; i++) {
    temperaturePrecedente += Math.trunc(liste[i]);
    resultat.push(temperaturePrecedente);
  }
  return resultat;
}

// Exercice 1 — Vent solaire
// Créez la fonction corrigerPression(liste) ci-dessous.
function corrigerPression(liste) {
  // nouveau tableau de résutats
  let resultat = [];

  // passer les nombres negatifs au positifs
  // arrondir les nombres
  // envoyer dans le nouveau tableau
  // return tableau

  for (let i = 0; i < liste.length; i++) {
    resultat.push(Math.abs(Math.round(liste[i])));
  }

  return resultat;
}
