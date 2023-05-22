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

// Exercice 0
// Déclarez une fonction convertirEnSemainesEtJours(nombreDeJours) et faites lui retourner
// une template string qui correspond à la solution de l'énoncé

function convertirEnSemainesEtJours(nombreDeJours) {
  return `${nombreDeJours} jour(s), c'est équivalent à ${
    (nombreDeJours - (nombreDeJours % 7)) / 7
  } semaine(s) et ${nombreDeJours % 7} jour(s)`;
}

// Exercice 1
// Déclarez une fonction calculPrixNappes(nombreDeTables, diametreTable, prixTissu)
// qui renvoie le prix total du tissu à acheter pour faire les nappes en fonction des tables utilisées

function calculPrixNappes(nombreDeTables, diametreTable, prixTissu) {
  return (diametreTable = diametreTable ** 2);
  prixTissu = nombreDeTables * diametreTable * prixTissu;
}

function calculPrixNappes(nombreDeTables, diametreTable, prixTissu) {
  let surface = diametreTable ** 2;
  let surfaceTotale = surface * nombreDeTables;
  let prix = surfaceTotale * prixTissu;
  return prix;
}

// Exercice 2
// Déclarez une fonction calculPrixNappesDegressif(nombreDeTables, diametreTable, prixTissu)
// qui renvoie le prix total du tissu à acheter pour faire les nappes en prenant en compte le tarif dégressif
function calculPrixNappesDegressif(nombreDeTables, diametreTable, prixTissu) {
    let surface = diametreTable ** 2;
    let surfaceTotale = nombreDeTables * surface;
    let prix = surfaceTotale * prixTissu;
    
    if (surfaceTotale >= 100) {
      return prix * (1 - 50 / 100);
    }
    if (surfaceTotale >= 50) {
      return prix * (1 - 30 / 100);
    }
    if (surfaceTotale >= 30) {
      return prix * (1 - 20 / 100);
    }
    if (surfaceTotale >= 20) {
      return prix * (1 - 10 / 100);
    }

    return prix;
  }

// Exercice 3
// C'est la devinette, il faut tester votre solution dans la console développeur de
// Google Chrome. Il n'y a rien à écrire ici.

// Rappel : 
// si les doubles symboles sont AVANT : la variable se retrouve modifiée
// si les doubles symboles sont APRES : la variable initiale ne se modifie pas (juste inc)



// Chassez le bogue 0
// Pour faire cet exercice décommentez le code de Tom ci-dessous
function repeter(mot, nombreDeRepetitions) {
  let motRepete = mot;

  while (--nombreDeRepetitions !== 0) {
    motRepete += mot;
  }
  return motRepete;
}
