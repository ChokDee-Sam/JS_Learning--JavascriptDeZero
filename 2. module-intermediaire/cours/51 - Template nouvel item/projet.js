/* Rédigez votre code ci-dessous */

// Récupérer une référence sur le template
const elTemplateItem = document.querySelector("#template-item"); //template
const elNouvelItem = document.querySelector("#nouvel-item"); //input
const elListe = document.querySelector("#liste"); //ul de destination

// Détecter la soumission du formulaire
const elForm = document.querySelector("form"); //form contenant input

elForm.addEventListener("submit", function (e) { 
  // On empêche le rechargement de la page
  e.preventDefault();

  // Créer un élément <li> à partir du template
  const elLi = elTemplateItem.content.cloneNode(true);

  // Récupérer la valeur de l'input nouvel item
  const nomItem = elNouvelItem.value;

  // Injecter cette valeur dans l'élément <li>
  // Sélectionner l'élément nom <p>
  const elNom = elLi.querySelector(".nom");
  elNom.textContent = nomItem;

  // Ajouter l'élément <li> dans la liste <ul>
  liste.append(elLi);
});

// Récupérer des références
// const elTemplate = document.querySelector("#template-item");
// const liste = document.querySelector("#liste");
// const elForm = document.querySelector("form");

// elForm.addEventListener("submit", function (e) {
//   // On empêche le rechargement de la page
//   e.preventDefault();

//   // Cloner le li
//   const elLi = elTemplate.content.cloneNode(true);

//   // Ajouter le li dans la liste ul
//   liste.appendChild(elLi);

//   // Récupérer la valeur de l'input
//   let nouvelItem = document.querySelector("#nouvel-item");

//   // localiser l'emplacement
//   let nouvelleListe = document.querySelector("#liste>li:last-child>p");

//   // injecter cette valeur dans l'element li
//   nouvelleListe.innerHTML = nouvelItem.value;

//   // Reset le champ d'input
//   nouvelItem.value = "";

//   // Remettre le focus sur l'input
//   nouvelItem.focus();
// });
