/* Rédigez votre code ci-dessous */
const elTemplateItem = document.querySelector("#template-item");
const elListe = document.querySelector("#liste");
const elNouvelItem = document.querySelector("#nouvel-item");

const elForm = document.querySelector("form");

const q = elTemplateItem.content.querySelector(".quantite");
const u = elTemplateItem.content.querySelector(".unite");
const DEFAUT_QUANTITE = Number(q.textContent);
const DEFAUT_UNITE = u.selectedOptions[0].value;

// --------------------------
// --------------------------
// Function au Submit
// --------------------------
// --------------------------

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const elLi = elTemplateItem.content.cloneNode(true);
  let nomItem = elNouvelItem.value;

  nomItem = nomItem.trim();
  nomItem = nomItem.replace(/ {2,}/g, " ");

  const objetItem = extraireDonnees(nomItem);

  const elNom = elLi.querySelector(".nom");
  const elQuantite = elLi.querySelector(".quantite");
  const elUnite = elLi.querySelector(".unite");

  elNom.textContent = objetItem.nom;
  elQuantite.textContent = objetItem.quantite;
  elUnite.value = objetItem.unite;

  liste.append(elLi);

  elNouvelItem.value = "";

  elNouvelItem.focus();
});

// --------------------------
// --------------------------
// Extraire Donné
// --------------------------
// --------------------------

function extraireDonnees(nomItem) {
  let mots = nomItem.split(" ");
  let premierMot = mots[0];
  let deuxiemeMot = mots[1];

  // let quantite = DEFAUT_QUANTITE;
  // let unite = DEFAUT_UNITE;

  const objetItem = {
    nom: nomItem,
    quantite: DEFAUT_QUANTITE,
    unite: DEFAUT_UNITE,
  };

  if (Number.isInteger(Number(premierMot))) {
    objetItem.quantite = Number(premierMot);

    const UNITES = ["u.", "kg", "g", "L"];

    if (UNITES.includes(deuxiemeMot)) {
      objetItem.unite = deuxiemeMot;
      objetItem.nom = mots.slice(2).join(" ");
    } else {
      objetItem.nom = mots.slice(1).join(" ");
    }
  }

  objetItem.nom = objetItem.nom[0].toUpperCase() + objetItem.nom.slice(1);
  return objetItem;
}

// --------------------------
// --------------------------
// Les messages d'erreurs
// --------------------------
// --------------------------

elNouvelItem.addEventListener("input", function (e) {
  elNouvelItem.setCustomValidity("");
  elNouvelItem.checkValidity();
});

elNouvelItem.addEventListener("invalid", function (e) {
  const nom = elNouvelItem.value;

  if (nom.length === 0) {
    elNouvelItem.setCustomValidity(
      "Vous devez indiquer les informations de l'item, exemple : 250 g chocolat"
    );
  } else if (!/[A-Za-z]{2}/.test(nom)) {
    elNouvelItem.setCustomValidity(
      "Le nom de l'item doit faire 2 lettres minimum"
    );
  } else {
    elNouvelItem.setCustomValidity(
      "Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés"
    );
  }
});
