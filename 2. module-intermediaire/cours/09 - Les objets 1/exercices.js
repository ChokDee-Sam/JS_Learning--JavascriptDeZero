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
// Créez la fonction creerHoraire(monHeure, mesMinutes) ci-dessous.

function creerHoraire(monHeure, mesMinutes) {
  const horaire = {
    heures: monHeure,
    minutes: mesMinutes,
  };

  return horaire;
}

// Exercice 1
// Créez la fonction afficherHoraire(horaire) ci-dessous.

function afficherHoraire(horaire) {
  return `L'horaire est ${horaire.heures} heures et ${horaire.minutes} minutes.`;
}

// Exercice 2
// Créez la fonction avancerDe20Minutes(horaire) ci-dessous.

function avancerDe20Minutes(horaire) {
    horaire.minutes += 20;
    if (horaire.minutes >=60) {
        horaire.minutes -=  60
        horaire.heures += 1
    }
    if (horaire.heures >=24) {
        horaire.heures -= 24
    }


    return horaire
}


// Exerice 3 — Refactoring
// Pour faire cet exercice :
// 0. Pensez à ouvrir votre console développeur dans Chrome pour voir les erreurs !
// 1. Décommentez la fonction validerRdv originale ci-dessous.
// 2. Faites les étapes de remaniement indiquées sur le site (exercices.html).

// rdv = {
//     heures,
//     minutes,
//     durée
// }


function validerRdv(rdv, finJournee) {

  // ETAPE 1 : Calcul de la fin du RDV
  let finRdvHeures = rdv.heures;
  let finRdvMinutes = rdv.minutes + rdv.duree;

  // ETAPE 1.1 : Gestion du cas particulier où les minutes sont >= 60
  while (finRdvMinutes >= 60) {
    finRdvHeures++;
    finRdvMinutes -= 60;
  }

  // ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
  let rdvOk = (finRdvHeures < finJournee.heures
    || (finRdvHeures === finJournee.heures
    && finRdvMinutes < finJournee.minutes));

  // On renvoie si le RDV peut se faire ou pas
  return rdvOk;
}
