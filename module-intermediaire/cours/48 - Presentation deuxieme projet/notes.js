// --------------------------------
// ATTENTION AUX #DOCUMENT-FRAGMENT : Utiliser .content
// --------------------------------

// lorsqu'on souhaite acceder à une zone de template
const elTemplateItem = document.querySelector("#template-item");
// Puis de duppliquer ce template
const elLi = elTemplateItem.content.cloneNode(true);

// Utiliser la propriété .content sur les Documents-Fragment
const q = elTemplateItem.content.querySelector('quantite')

// --------------------------------
// le dossier 63 ne semble pas bugger sur Reget Template HTML
// --------------------------------
