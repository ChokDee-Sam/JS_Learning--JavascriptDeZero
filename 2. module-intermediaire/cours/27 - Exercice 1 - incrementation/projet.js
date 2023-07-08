/*
 * Rédigez le code pour ajouter cette fonctionnalité :
 *
 * 1. Bouton d'incrémentation : lorsqu'on clique
 * sur le bouton '+' le compteur doit être incrémenté d'1 unité.
 *
 * Prenez votre temps et bon courage 😁
 */

const boutonPlus = document.querySelector("#bouton-plus");
const compteur = document.querySelector("#compteur");

let compteurValeur = 0;

function incrementation() {
  compteurValeur++;
  compteur.textContent = compteurValeur;
}

boutonPlus.addEventListener("click", incrementation);