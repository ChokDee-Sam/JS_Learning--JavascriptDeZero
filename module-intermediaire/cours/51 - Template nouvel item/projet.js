/* Rédigez votre code ci-dessous */

// Récupérer des références
const elTemplate = document.querySelector("#template-item");
const liste = document.querySelector("#liste");
const elForm = document.querySelector("form");

elForm.addEventListener("submit", function (e) {
  // On empêche le rechargement de la page
  e.preventDefault();

  // Cloner le li
  const elLi = elTemplate.content.cloneNode(true);

  // Ajouter le li dans la liste ul
  liste.appendChild(elLi);

  // Récupérer la valeur de l'input
  let nouvelItem = document.querySelector("#nouvel-item");

  // localiser l'emplacement
  let nouvelleListe = document.querySelector("#liste>li:last-child>p");

  // injecter cette valeur dans l'element li
  nouvelleListe.innerHTML = nouvelItem.value;

  // Reset le champ d'input 
  nouvelItem.value = "";

  // Remettre le focus sur l'input
  nouvelItem.focus();
});

