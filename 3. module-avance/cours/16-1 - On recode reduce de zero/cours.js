/* La méthode reduce() réécrite de zéro */

/* Objet initial qui jouera le rôle du tableau (Array) */
let objetTableau = {
  donnees: ["zero", "un", "deux", "trois"],
  reduce: function (callback, valeurInitiale) {
    let resultat = valeurInitiale;

    for (let index = 0; index < this.donnees.length; index++) {
      resultat = callback(resultat, this.donnees[index], index, this.donnees);
    }
    return resultat;
  },
};

//-------------------------------------------------
/* Fonction de callback */
//-------------------------------------------------

function concatenation(resultat, chaine) {
  let chaineFinale = resultat + chaine;
  return chaineFinale;
}

// On combine notre "tableau"
let resultat = objetTableau.reduce(concatenation, "");
console.log(resultat);

//-------------------------------------------------
// Dans le cas où on ne donne pas de valeur initiale
//-------------------------------------------------

// Objet initial qui jouera le rôle du tableau (Array) */
let objetTableauSansValeurInitiale = {
  donnees: ["zero", "un", "deux", "trois"],
  reduce: function (callback, valeurInitiale) {
    let resultat = valeurInitiale;

    // On ajoute un debut index qui pourrait être modifié s'il manque la valeur initiale
    let debutIndex = 0;

    // On entre notre condition
    if (valeurInitiale === undefined) {
      resultat = this.donnees[0]; //  pour donner une valeur initiale du premier element du tableau à l'accumulateur
      debutIndex = 1; //  pour     let index = debutIndex      dans la boucle for
    }

    // On fait notre boucle avec notre debutIndex défini de manière à avoir ou non une valeur initiale
    for (let index = debutIndex; index < this.donnees.length; index++) {
      resultat = callback(resultat, this.donnees[index], index, this.donnees);
    }
    return resultat;
  },
};

// On fait notre .reduce() sans définir de valeur initiale
let autreResultat = objetTableauSansValeurInitiale.reduce(concatenation);
console.log(autreResultat);
