/* Comment afficher une notification */

// Visite du CSS : classes .notification et .afficher

/* Comment ajouter la classe afficher ? */
const boutonMoins = document.querySelector("#bouton-moins");
const notification = document.querySelector("#notification");

// boutonMoins.addEventListener('click', function() {
//   notification.classList.add('afficher')
// });

/* Comment exécuter du code JavaScript après un certain temps ? */
boutonMoins.addEventListener("click", function () {
  notification.classList.add("afficher");
  // Après 3 secondes, retirer la classe afficher
  window.setTimeout(() => {
    notification.classList.remove("afficher");
  }, 1000);
});

/* Prochain exercice */
