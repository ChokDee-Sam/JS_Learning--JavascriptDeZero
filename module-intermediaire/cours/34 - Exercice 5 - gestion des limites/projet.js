/*
 * Ci-dessous vous trouverez une solution possible des exercices
 * précédents.
 *
 * Complétez ce code pour ajouter les fonctionnalités suivantes :
 *
 * 1. Gestion des limites : lors d'une modification de la valeur du
 * compteur, si une limite est atteinte alors il faut :
 *    1.1 Affecter au compteur la valeur de la limite atteinte
 *    1.2 Modifier le texte de la notification pour :
 *      1.2.1 "Limite haute (X) atteinte" où X sera la valeur de la
 * limite haute si c'est la limite haute qui a été atteinte
 *      1.2.2 "Limite basse (X) atteinte" où X sera la valeur de la
 * limite basse si c'est la limite basse qui a été atteinte
 *    1.3 Afficher la notification pendant 3 secondes
 *    1.4 Appliquer la classe "limite-atteinte" au compteur pour le
 * faire vibrer et qu'il devienne rouge
 *
 *
 *
 * 2. Lorsqu'on modifie la valeur du compteur et qu'aucune limite
 * n'est atteinte il faut retirer la classe limite-atteinte du
 * compteur pour lui redonner sa couleur blanche normale
 *
 *
 *
 * 3. Une limite peut être atteinte lorsqu'on modifie la valeur du
 * compteur via les boutons + et - mais également via la zone de
 * clic et le bouton reset !
 *
 *
 *
 * NOTE : Si vous souhaitez utiliser le code que vous avez produit
 * pour répondre aux exercices précédents, vous pouvez bien sûr le
 * faire !
 * Remplacez simplement le code ci-dessous par le vôtre puis
 * complétez-le pour ajouter les fonctionnalités demandées.
 *
 * Prenez votre temps et bon courage 😁
 */

// -------------------------------------------------------------------------
// LES VARIABLES
// -------------------------------------------------------------------------

// La notification supérieure
const notification = document.querySelector("#notification");
const notificationTexte = document.querySelector("#notification-texte");

// Le compteur central
const compteur = document.querySelector("#compteur");

// Les 3 boutons
const boutonPlus = document.querySelector("#bouton-plus");
const boutonMoins = document.querySelector("#bouton-moins");
const boutonReset = document.querySelector("#bouton-reset");

// Le compteur sous forme numérique
let compteurDeClics = 0;

// La zone de clic basse
const zoneDeClic = document.querySelector("#zone-de-clic");

// Les valeurs d'incrémentations et de décrémentation
const inputValeurDec = document.querySelector("#valeur-dec");
const inputValeurInc = document.querySelector("#valeur-inc");

// La limite haute et la limite basse
const inputLimiteHaute = document.querySelector("#limite-haute");
const inputLimiteBasse = document.querySelector("#limite-basse");

// ------------------------------------------------------------------
// LES FONCTIONS
// ------------------------------------------------------------------

function modifierCompteur(nouvelleValeur) {
  compteurDeClics = nouvelleValeur;
  const limiteHaute = Number(inputLimiteHaute.value);
  const limiteBasse = Number(inputLimiteBasse.value);

  if (compteurDeClics >= limiteHaute) {
    compteurDeClics = limiteHaute;
    afficherNotification(`Limite haute ${limiteHaute} atteinte`);
  }

  if (compteurDeClics <= limiteBasse) {
    compteurDeClics = limiteBasse;
    afficherNotification(`Limite basse ${limiteBasse} atteinte`);
  }

  // Pour retirer l'affichage du compteur en rouge
  if (compteurDeClics < limiteHaute && compteurDeClics > limiteBasse) {
    compteur.classList.remove("limite-atteinte");
  }

  compteur.textContent = compteurDeClics;
}

// Fonction d'incrémentation
function incrementerCompteur() {
  modifierCompteur(compteurDeClics + Number(inputValeurInc.value));
}

// Fonction de décrémentation
function decrementerCompteur() {
  modifierCompteur(compteurDeClics - Number(inputValeurInc.value));
}

// Fonction d'affichage de limite
function afficherNotification(message) {
  notificationTexte.textContent = message;
  notification.classList.add("afficher");
  compteur.classList.add("limite-atteinte");

  window.setTimeout(function () {
    notification.classList.remove("afficher");
  }, 3000);
}

// -------------------------------------------------------------------------
// LES FONCTIONNALITÉS
// -------------------------------------------------------------------------

/* Fonctionnalité d'incrémentation */
boutonPlus.addEventListener("click", incrementerCompteur);

/* Fonctionnalité de décrémentation */
boutonMoins.addEventListener("click", decrementerCompteur);

/* Bouton reset (remise à zéro) */
boutonReset.addEventListener("click", function () {
  modifierCompteur(0);
});

/* Incrémentation depuis la zone de clic */
zoneDeClic.addEventListener("click", incrementerCompteur);

/* Décrémentation depuis la zone de clic */
zoneDeClic.addEventListener("contextmenu", function (evenement) {
  // Désactivation du menu contextuel
  evenement.preventDefault();

  decrementerCompteur();
});
