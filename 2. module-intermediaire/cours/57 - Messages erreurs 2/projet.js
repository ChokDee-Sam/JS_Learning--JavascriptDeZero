/* Rédigez votre code ci-dessous */
// Récupérer une référence sur le template
const elTemplateItem = document.querySelector("#template-item");
const elNouvelItem = document.querySelector("#nouvel-item");
const elListe = document.querySelector("#liste");

// Détecter la soumission du formulaire
const elForm = document.querySelector("form");

elForm.addEventListener("submit", function (e) {
  // On empêche le rechargement de la page
  e.preventDefault();

  // Créer un élément <li> à partir du template
  const elLi = elTemplateItem.content.cloneNode(true);

  // Récupérer la valeur de l'input nouvel item
  let nomItem = elNouvelItem.value;

  // Supprimer les espaces en trop avant et après le nom
  nomItem = nomItem.trim();

  // Supprimer les espaces d'affilés en trop
  nomItem = nomItem.replace(/ {2,}/g, " ");

  // Mettre la 1ère lettre en majuscule
  // pommes => P + ommes
  nomItem = nomItem[0].toUpperCase() + nomItem.slice(1);

  // Injecter cette valeur dans l'élément <li>
  // Sélectionner l'élément nom <p>
  const elNom = elLi.querySelector(".nom");
  elNom.textContent = nomItem;

  // Ajouter l'élément <li> dans la liste <ul>
  liste.append(elLi);

  // Vider le champ nouvel item
  elNouvelItem.value = "";

  // Mettre le focus immédiatement sur le champ nouvel item
  elNouvelItem.focus();
});

//

elNouvelItem.addEventListener("input", function (e) {
  // console.log(`ok !`);
  // pour éviter de rester dans un message "invalid" en supprimant les caracteres non valides. Mais par défault, reprends le message d'erreur par défault issus de l'html input title
  elNouvelItem.setCustomValidity(""); 
  elNouvelItem.checkValidity(); 
  // vérifie la validité du champs grace à l'input pattern html (à chaque fois que sa valeur est modifiée grace à "input"), et en cas de valeur invalide, il déclenche l'evenement "invalid", afin de ne pas rester sur le message d'erreur par défault
});

elNouvelItem.addEventListener("invalid", function (e) {
  // console.log("invalid");
  const nom = elNouvelItem.value;

  if (nom.length === 0) {
    elNouvelItem.setCustomValidity(
      "Vous devez indiquer les informations de l'item, exemple : 250 g chocolat"
    );
  } else {
    elNouvelItem.setCustomValidity(
      "Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés"
    );
  }
});
