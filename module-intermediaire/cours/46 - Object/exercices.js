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

// Object.assign(target, source)=>  copie les propriétés/valeur d'un objet dans un autre
// Object.entries(nomObjet)     =>  renvoie un tableau de chaque paire (propriété/valeur) d'un objet
// Object.keys(nomObjet)        =>  renvoie un tableau contenant les noms des propriétés d'un objet
// Object.values(nomObjet)      =>  renvoie un tableau contenant les valeurs d'un objet

// Exercice 0
// Créez la fonction assign0(objet1, objet2) ci-dessous.
function assign0(objet1, objet2) {
  return Object.assign(objet1, objet2);
}

// Exercice 1
// Créez la fonction entries0(objet) ci-dessous.
function entries0(objet) {
  return Object.entries(objet);
}

// Exercice 2
// Créez la fonction keys0(objet) ci-dessous.
function keys0(objet) {
  return Object.keys(objet);
}

// Exercice 3
// Créez la fonction values0(objet) ci-dessous.
function values0(objet) {
  return Object.values(objet);
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Inversement clé / valeur
// Créez la fonction inverser(objet) ci-dessous.
function inverser(objet) {
  const resultat = {};
  const keys = Object.keys(objet);
  const values = Object.values(objet);

  for (i = 0; i < keys.length; i++) {
    resultat[values[i]] = keys[i];

    // possibilité de décomposer
    // const key = keys[i];
    // const value = values[i];
    // resultat[value] = key;
  }

  return resultat;
}

// Exercice 1 — Résumé
// Créez la fonction resume(objet) ci-dessous.

function resume(objet) {
  const resultat = {};
  let clés = Object.keys(objet);
  let valeurs = Object.values(objet);

  resultat.cles = clés;
  resultat.valeurs = valeurs;

  return resultat;
}

// Différent
// function resume(objet) {
//   return {
//     cles: Object.keys(objet),
//     valeurs: Object.values(objet),
//   };
// }
