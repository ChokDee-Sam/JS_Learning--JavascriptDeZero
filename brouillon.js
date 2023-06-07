let id = "nom:redocemia;prénom:tom";
let debut = id.indexOf(":") + 1;
let fin = id.indexOf(";");
console.log(id.slice(debut, fin).toUpperCase());
