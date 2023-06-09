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

//  ---------------------------------------------------------
//  Les Tableaux modifiés
//  ---------------------------------------------------------
//
// shift() = Retirer le premier element
// unshift() = Ajoute un ou plusieurs premiers éléments

// pop() = Retire le dernier élément
// push() = Ajoute 1 ou plusieurs éléments en fin de tableau

// fill() = remplir tous les éléments d'un tableau. entre deux index avec une valeur statique.
// array.fill(0,2,4)   => fill with 0, from 2(include) to 4(non include)

// reverse() = inverse l'ordre des éléments d'un tableau
// splice() = à partir de tel index, supprime X élément, puis ajoute tel élément,

//  ---------------------------------------------------------
//  Les Nouveaux Tableaux
//  ---------------------------------------------------------

// concat() = fusionner deux ou plusieurs tableaux en les concaténant (new)

//  ---------------------------------------------------------
//  Les Tableaux inchangés (une valeur de return)
//  ---------------------------------------------------------

// indexOf() = Renvoie l'index de notre recherche, en partant du début du tableau
//array.indexOf('bison', 2)   => recherche l'index bison, à partir de 2eme index
// lastIndexOf = Renvoie l'index de notre recherche, en partant de la fin du tableau

// slice() = Découpe un tableau
// array.slice(2, 4)    => cut from 2(include) to 4(non include)

// includes() = Renvoie true ou false, selon si une valeur est contenue
// join() = Concatene une nouvelle chaîne avec tous les éléments + ce qui les lie

//  ---------------------------------------------------------
//  ---------------------------------------------------------

// Exercice 0
// Créez la fonction concat0(tableau1, tableau2) ci-dessous.
function concat0(tableau1, tableau2) {
  return tableau1.concat(tableau2);
}

// Exercice 1
// Créez la fonction concat1(tableau, valeur1, valeur2, valeur3) ci-dessous.
function concat1(tableau, valeur1, valeur2, valeur3) {
  return tableau.concat(valeur1, valeur2, valeur3);
}

// Exercice 2
// Créez la fonction fill0(tableau, valeur) ci-dessous.
function fill0(tableau, valeur) {
  return tableau.fill(valeur);
}

// Exercice 3
// Créez la fonction fill1(tableau, valeur, index) ci-dessous.
function fill1(tableau, valeur, index) {
  return tableau.fill(valeur, index);
}
// Exercice 4
// Créez la fonction fill2(tableau, valeur, debut, fin) ci-dessous.
function fill2(tableau, valeur, debut, fin) {
  return tableau.fill(valeur, debut, fin + 1);
}

// Exercice 5
// Créez la fonction fill3(tableau, valeur) ci-dessous.
function fill3(tableau, valeur) {
  return tableau.fill(valeur, -3);
}

// Exercice 6
// Créez la fonction includes0(tableau, valeur) ci-dessous.
function includes0(tableau, valeur) {
  return tableau.includes(valeur);
}

// Exercice 7
// Créez la fonction includes1(tableau, valeur, debut) ci-dessous.
function includes1(tableau, valeur, debut) {
  return tableau.includes(valeur, debut);
}

// Exercice 8
// Créez la fonction includes2(tableau, valeur) ci-dessous.
function includes2(tableau, valeur) {
  return tableau.includes(valeur, -4);
}

// Exercice 9
// Créez la fonction indexOf0(tableau, valeur) ci-dessous.
function indexOf0(tableau, valeur) {
  return tableau.indexOf(valeur);
}

// Exercice 10
// Créez la fonction indexOf1(tableau, valeur, debut) ci-dessous.
function indexOf1(tableau, valeur, debut) {
  return tableau.indexOf(valeur, debut);
}

// Exercice 11
// Créez la fonction indexOf2(tableau, valeur) ci-dessous.
function indexOf2(tableau, valeur) {
  return tableau.indexOf(valeur, -2);
}

// Exercice 12
// Créez la fonction join0(tableau) ci-dessous.
function join0(tableau) {
  return tableau.join(",");
}

// Exercice 13
// Créez la fonction join1(tableau, separateur) ci-dessous.
function join1(tableau, separateur) {
  return tableau.join(separateur);
}

// Exercice 14
// Créez la fonction lastIndexOf0(tableau, valeur) ci-dessous.
function lastIndexOf0(tableau, valeur) {
  return tableau.lastIndexOf(valeur);
}

// Exercice 15
// Créez la fonction lastIndexOf1(tableau, valeur) ci-dessous.
function lastIndexOf1(tableau, valeur) {
  return tableau.lastIndexOf(valeur, 3);
}

// Exercice 16
// Créez la fonction lastIndexOf2(tableau, valeur) ci-dessous.
function lastIndexOf2(tableau, valeur) {
  return tableau.lastIndexOf(valeur, -3);
}

// Exercice 17
// Créez la fonction pop0(tableau) ci-dessous.
function pop0(tableau) {
  return tableau.pop();
}

// Exercice 18
// Créez la fonction pop1(tableau) ci-dessous.
function pop1(tableau) {
  tableau.pop();
  return tableau;
}

// Exercice 19
// Créez la fonction push0(tableau, valeur) ci-dessous.
function push0(tableau, valeur) {
  tableau.push(valeur);
  return tableau;
}

// Exercice 20
// Créez la fonction push1(tableau, valeur1, valeur2) ci-dessous.
function push1(tableau, valeur1, valeur2) {
  tableau.push(valeur1, valeur2);
  return tableau;
}

// Exercice 21
// Créez la fonction reverse0(tableau) ci-dessous.
function reverse0(tableau) {
  return tableau.reverse();
}

// Exercice 22
// Créez la fonction shift0(tableau) ci-dessous.
function shift0(tableau) {
  return tableau.shift();
}

// Exercice 23
// Créez la fonction shift1(tableau) ci-dessous.
function shift1(tableau) {
  tableau.shift();
  return tableau;
}

// Exercice 24
// Créez la fonction slice0(tableau) ci-dessous.
function slice0(tableau) {
  return tableau.slice(2);
}

// Exercice 25
// Créez la fonction slice1(tableau, debut, fin) ci-dessous.
function slice1(tableau, debut, fin) {
  return tableau.slice(debut, fin);
}

// Exercice 26
// Créez la fonction slice2(tableau) ci-dessous.
function slice2(tableau) {
  return tableau.slice(-3);
}

// Exercice 27
// Créez la fonction slice3(tableau) ci-dessous.
function slice3(tableau) {
  return tableau.slice(2, -2);
}

// Exercice 28
// Créez la fonction splice0(tableau) ci-dessous.
function splice0(tableau) {
  tableau.splice(2, 1);
  return tableau;
}
// Exercice 29
// Créez la fonction splice1(tableau) ci-dessous.
function splice1(tableau) {
  tableau.splice(1, 3);
  return tableau;
}

// Exercice 30
// Créez la fonction splice2(tableau) ci-dessous.
function splice2(tableau) {
  tableau.splice(-3, 2);
  return tableau;
}

// Exercice 31
// Créez la fonction splice3(tableau, debut, valeur) ci-dessous.
function splice3(tableau, debut, valeur) {
  tableau.splice(debut, 0, valeur);
  return tableau;
}

// Exercice 32
// Créez la fonction splice4(tableau, debut, valeur1, valeur2) ci-dessous.
function splice4(tableau, debut, valeur1, valeur2) {
  tableau.splice(debut, 0, valeur1, valeur2);
  return tableau;
}

// Exercice 33
// Créez la fonction splice5(tableau, valeur1, valeur2) ci-dessous.
function splice5(tableau, valeur1, valeur2) {
  tableau.splice(-2, 0, valeur1, valeur2);
  return tableau;
}

// Exercice 34
// Créez la fonction splice6(tableau, valeur1, valeur2) ci-dessous.
function splice6(tableau, valeur1, valeur2) {
  tableau.splice(1, 3, valeur1, valeur2);
  return tableau;
}

// Exercice 35
// Créez la fonction unshift0(tableau, valeur) ci-dessous.
function unshift0(tableau, valeur) {
  tableau.unshift(valeur);
  return tableau;
}

// Exercice 36
// Créez la fonction unshift1(tableau, valeur1, valeur2) ci-dessous.
function unshift1(tableau, valeur1, valeur2) {
  tableau.unshift(valeur1, valeur2);
  return tableau;
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Demi-tour
// Créez la fonction demitour(tableau1, tableau2) ci-dessous.
function demitour(tableau1, tableau2) {
  return tableau1.concat(tableau2).reverse();
}

// Exercice 1 — Remplissage
// Créez la fonction remplissage(mot, taille) ci-dessous.
function remplissage(mot, taille) {
  longueurMot = mot.length;
  for (let i = 0; i < taille - longueurMot; i++) {
    mot.unshift("#");
  }
  return mot.join("");
}

// Exercice 2 — Extraction
// Créez la fonction extraction(transmission, sequence) ci-dessous.
function extraction(transmission, sequence) {
  const debutSequence = transmission.indexOf(sequence); //2
  const finSequence = transmission.lastIndexOf(sequence); //7

  return transmission.slice(debutSequence + 1, finSequence);
}

// Exercice 3 — Camouflage
// Créez la fonction camouflage(transmission, sequence) ci-dessous.
function camouflage(transmission, sequence) {
  const debutSequence = transmission.indexOf(sequence); //2
  const finSequence = transmission.lastIndexOf(sequence); //7

  return transmission.fill("#", debutSequence + 1, finSequence);
}

// Exercice 4 — Suppression
// Créez la fonction suppression(transmission, sequence) ci-dessous.
function suppression(transmission, sequence) {
  const debutSequence = transmission.indexOf(sequence) + 1; //3
  const finSequence = transmission.lastIndexOf(sequence); //7
  const debut = transmission.slice(0, debutSequence);
  const fin = transmission.slice(finSequence, transmission.length);
  return debut.concat(fin);
}

// Correction du formateur
// function suppression(transmission, sequence) {
//   // indexDebut correspond à la première lettre du code secret
//   // (d'où le + 1) !
//   const indexDebut = transmission.indexOf(sequence) + 1;
//   // indexFin correspond à l'index de sequence de fin du code
//   const indexFin = transmission.lastIndexOf(sequence);

//   // On calcule la longueur du code secret à supprimer
//   const longueurASupprimer = indexFin - indexDebut;
//   // On supprime dès la 1ère lettre du code secret
//   transmission.splice(indexDebut, longueurASupprimer);

//   return transmission;
// }

// Exercice 5 — Entrelacement
// Créez la fonction entrelacement(tableau1, tableau2) ci-dessous.
// function entrelacement(tableau1, tableau2) {
function entrelacement(tableau1, tableau2) {
  let tableauMix = [];
  for (let i = 0; i < tableau1.length; i++) {
    tableauMix.push(tableau1[i], tableau2[i]);
  }
  return tableauMix;
}

// Exercice 6 — Duplication
// Créez la fonction duplication(quantites, valeurs) ci-dessous.

function duplication(quantites, valeurs) {
  const resultat = [];

  // Pour chaque quantité du tableau quantites...
  for (let i = 0; i < quantites.length; i++) {
    const quantite = quantites[i];
    const valeur = valeurs[i];

    // On boucle plusieurs fois pour faire les copies (duplication)
    for (let copies = 0; copies < quantite; copies++) {
      resultat.push(valeur);
    }
  }

  return resultat;
}

// Exercice 7 — Sélection
// Créez la fonction selection(selecteur, liste) ci-dessous.
function selection(selecteur, liste) {
  let resultat = [];
  // let resultatTemporaire;

  for (let i = 0; i < selecteur.length; i++) {
    if (liste.includes(selecteur[i])) {
      // resultatTemporaire = liste.shift();
      // resultat.push(resultatTemporaire);
      resultat.push(liste.shift());
    } else {
      // resultatTemporaire = liste.pop();
      // resultat.push(resultatTemporaire);
      resultat.push(liste.pop());
    }
  }

  return resultat;
}

// Exercice 8 — Extraction multiple
// Créez la fonction extractionMultiple(transmission, sequence) ci-dessous.
// function extractionMultiple(transmission, sequence) {
//   debugger;

//   let tableau = [];
//   let stop = true;

//   for (let i = 0; i < transmission.length; i++) {
//     // if (transmission[i] === sequence) {
//     //   stop = false;
//       while (transmission[i] === !sequence) {
//         tableau.push = transmission[i];
//       }
//     // }
//   }

//   return tableau;
// }



function extractionMultiple(transmission, sequence) {

  let resultat = [];

  // On cherche le 1er caractère de sequence
  let indexDebut = transmission.indexOf(sequence);

  // Tant qu'il en existe un, on extrait le code secret
  while (indexDebut !== -1) {

    // On cherche le caractère sequence de fin de ce code secret.
    // Pour ça, on utilise indexOf() à partir du caractère juste
    // après le 1er caractère de sequence soit (indexDebut + 1)
    const indexFin = transmission.indexOf(sequence, indexDebut + 1);

    // On récupère le code secret grâce à slice() qu'on cumule
    // au resultat grâce à concat()
    resultat = resultat.concat(transmission.slice(indexDebut + 1, indexFin));

    // On cherche le prochain caractère de début de sequence de
    // code secret en partant cette fois-ci de juste après le
    // caractère sequence de fin du code qu'on vient de lire,
    // soit à partir de (indexFin + 1)
    indexDebut = transmission.indexOf(sequence, indexFin + 1);
  }
  return resultat;
}

// Exercice 9 — Extraction multiple incomplète
// Créez la fonction extractionMultiple(transmission, sequence) ci-dessous.
function extractionMultipleIncomplete(transmission, sequence) {

  let resultat = [];

  // On cherche le 1er caractère de sequence
  let indexDebut = transmission.indexOf(sequence);

  // Tant qu'il en existe un, on extrait le code secret
  while (indexDebut !== -1) {

    // On cherche le caractère sequence de fin de ce code secret.
    // Pour ça, on utilise indexOf() à partir du caractère juste
    // après le 1er caractère de sequence soit (indexDebut + 1)
    const indexFin = transmission.indexOf(sequence, indexDebut + 1);

    // S'il n'y a pas de caractère sequence de fin, on lit
    // jusqu'au bout du fichier et on arrête de chercher
    if (indexFin === -1) {
      resultat = resultat.concat(transmission.slice(indexDebut + 1));
      // On arrête de chercher, cette ligne permet de sortir
      // de la boucle du while()
      indexDebut = -1;

    } else {
      // On récupère le code secret grâce à slice() qu'on cumule
      // au resultat grâce à concat()
      resultat = resultat.concat(transmission.slice(indexDebut + 1, indexFin));
      
      // On cherche le prochain caractère de début de sequence de
      // code secret en partant cette fois-ci de juste après le
      // caractère sequence de fin du code qu'on vient de lire,
      // soit à partir de (indexFin + 1)
      indexDebut = transmission.indexOf(sequence, indexFin + 1);
    }
  }
  return resultat;
}