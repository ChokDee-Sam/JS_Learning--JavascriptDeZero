/* La méthode filter() réécrite de zéro */
/* Objet initial qui jouera le rôle du tableau (Array) */
let objetTableau = {
  donnees: ["zero", "un", "deux", "trois"],
  filter: function (callback) {
    let resultat = [];
    for (let index = 0; index < this.donnees.length; index++) {
      if (callback(this.donnees[index], index, this.donnees)) {
        resultat.push(this.donnees[index]);
      }
    }
    return resultat
  },
};

/* Fonction de callback */
function longueurSuperieurOuEgaleA3(chaine) {
  if (chaine.length >= 3) {
    return true;
  } else {
    return false;
  }
}

// On filtre notre "tableau"
let resultat = objetTableau.filter(longueurSuperieurOuEgaleA3);
console.log(resultat);
