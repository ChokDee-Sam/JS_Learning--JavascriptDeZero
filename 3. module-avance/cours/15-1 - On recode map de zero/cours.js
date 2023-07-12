/* La méthode map() réécrite de zéro */

/* Objet initial qui jouera le rôle du tableau (Array) */
let objetTableau = {
  donnees: ["zero", "un", "deux", "trois"],
  map: function (callback) {
    let resultat = [];
    for (let i = 0; i < this.donnees.length; i++) {
      resultat.push(callback(this.donnees[i], i, this.donnees));
    }
    return resultat;
  },
};

/* Fonction de callback */
function longueurChaine(chaine) {
  return chaine.length;
}

// On transforme notre "tableau"
let resultat = objetTableau.map(longueurChaine);
console.log(resultat);
