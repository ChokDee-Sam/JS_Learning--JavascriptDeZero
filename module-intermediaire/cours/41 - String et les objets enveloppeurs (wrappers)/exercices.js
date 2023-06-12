/*
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com
 */

/*****************************************************************************
 *          📣 OYEZ OYEZ BRAVES DÉVELOPPEURS ET DÉVELOPPEUSES ! 📣            *
 *****************************************************************************
 *
 * Maintenant que vous êtes dans le module intermédiaire, vous serez un peu moins
 * assisté dans les exercices. La plupart du temps vous devrez partir de zéro.
 *
 * Ce n'est pas pour rien que ma formation s'appelle JavaScript de Zéro !
 *
 * Quelques nouveautés concernant les exercices dans ce module :
 * ✅ Vous pouvez faire les exercices dans n'importe quel ordre 👌 (je vous
 * recommande tout de même de les faire dans l'ordre, la difficulté est croissante).
 * ✅ J'affiche dans le navigateur Chrome le nombre de tests réussis pour l'exercice
 * en cours, ça devrait vous motiver pour terminer les exercices récalcitrants.
 *
 * Merci et bon courage ! 🤘
 */

// concat()     =>  return une concatènation
// toLowerCase()=>  return des minuscules
// toUpperCase()=>  return des majuscules

// trim()       =>  retire les blancs en début et fin de chaine de car
// trimStart()  =>  retire les blancs en début de chaine de car
// trimEnd()    =>  retire les blanc en fin de chaine de car

// replace()    =>  remplace UNE chaine de caractère par une autre
// replaceAll() =>  remplace TOUTES les chaines de caractère par une autre

// indexOf      =>  return l'index en partant du début
// lastIndexOf  =>  return l'index en partant de la fin

// charAt()     =>  return le caractère à la position indiquée

// includes()   =>  return true / false
// startsWith() =>  return true / false
// endsWith()   =>  return true / false

// padStart()   =>  compléter la chaîne courante avec une chaîne de caractères
//                  jusqu'à l'index défini (en début de chaine courante).
// padEnd()     =>  compléter la chaîne courante avec une chaîne de caractères
//                  jusqu'à l'index défini (en fin de chaine courante).

// repeat()     =>  repète (x) fois

// slice()      =>  découpe
// split()      =>  divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau.
//  str.split('')   =>  divise à chaque chaines de car
//  str.split(' ')  =>  divise à chaque espace

// localeCompare()    =>    Compare selon l'ordre lexicographique
//      nombre negatif si chaine de car située avant la chaine à comparer
//      nombre positif si chaine de car située après la chaine à comparer
//      0   si les deux chaines sont équivalentes

// Exercice 0
// Créez la fonction charAt0(chaine, index) ci-dessous.
function charAt0(chaine, index) {
  return chaine.charAt(index);
}

// Exercice 1
// Créez la fonction concat0(chaine1, chaine2) ci-dessous.
function concat0(chaine1, chaine2) {
  return chaine1.concat(chaine2);
}

// Exercice 2
// Créez la fonction concat1(chaine1, chaine2, chaine3) ci-dessous.
function concat1(chaine1, chaine2, chaine3) {
  return chaine1.concat(chaine2.concat(chaine3));
}

// Exercice 3
// Créez la fonction concat2(chaine1, chaine2, chaine3) ci-dessous.
function concat2(chaine1, chaine2, chaine3) {
  return chaine3.concat(chaine2.concat(chaine1));
}

// Exercice 4
// Créez la fonction includes0(chaine, caractere) ci-dessous.
function includes0(chaine, caractere) {
  return chaine.includes(caractere);
}

// Exercice 5
// Créez la fonction includes1(chaine, motif) ci-dessous.
function includes1(chaine, motif) {
  return chaine.includes(motif);
}

// Exercice 6
// Créez la fonction includes2(chaine, caractere) ci-dessous.
function includes2(chaine, caractere) {
  return chaine.includes(caractere, chaine.length - 2);
}

// Exercice 7
// Créez la fonction endsWith0(chaine, caractere) ci-dessous.
function endsWith0(chaine, caractere) {
  return chaine.endsWith(caractere);
}

// Exercice 8
// Créez la fonction endsWith1(chaine, fin) ci-dessous.
function endsWith1(chaine, fin) {
  return chaine.endsWith(fin);
}

// Exercice 9
// Créez la fonction endsWith2(chaine, fin) ci-dessous.
function endsWith2(chaine, fin) {
  return chaine.endsWith(fin, chaine.length - 3);
}

// Exercice 10
// Créez la fonction indexOf0(chaine, motif) ci-dessous.
function indexOf0(chaine, motif) {
  return chaine.indexOf(motif);
}

// Exercice 11
// Créez la fonction indexOf1(chaine, motif) ci-dessous.
function indexOf1(chaine, motif) {
  return chaine.indexOf(motif, 5);
}

// Exercice 12
// Créez la fonction indexOf2(chaine, motif) ci-dessous.
function indexOf2(chaine, motif) {
  return chaine.indexOf(motif, chaine.length - 15);
}

// Exercice 13
// Créez la fonction lastIndexOf0(chaine, motif) ci-dessous.
function lastIndexOf0(chaine, motif) {
  return chaine.lastIndexOf(motif);
}

// Exercice 14
// Créez la fonction lastIndexOf1(chaine, motif) ci-dessous.
function lastIndexOf1(chaine, motif) {
  return chaine.lastIndexOf(motif, 19);
}

// Exercice 15
// Créez la fonction localeCompare0(mot1, mot2) ci-dessous.
function localeCompare0(mot1, mot2) {
  return mot1.localeCompare(mot2);
}

// Exercice 16
// Créez la fonction padEnd0(chaine, longueur) ci-dessous.
function padEnd0(chaine, longueur) {
  return chaine.padEnd(longueur, "#");
}

// Exercice 17
// Créez la fonction padEnd1(chaine, longueur) ci-dessous.
function padEnd1(chaine, longueur) {
  return chaine.padEnd(longueur, "OUI");
}

// Exercice 18
// Créez la fonction padStart0(chaine, longueur) ci-dessous.
function padStart0(chaine, longueur) {
  return chaine.padStart(longueur, "#");
}

// Exercice 19
// Créez la fonction padStart1(chaine, longueur) ci-dessous.
function padStart1(chaine, longueur) {
  return chaine.padStart(longueur, "OUI");
}

// Exercice 20
// Créez la fonction repeat0(caractere, longueur) ci-dessous.
function repeat0(caractere, longueur) {
  return caractere.repeat(longueur);
}

// Exercice 21
// Créez la fonction repeat1(chaine, repetitions) ci-dessous.
function repeat1(chaine, repetitions) {
  return chaine.repeat(repetitions);
}

// Exercice 22
// Créez la fonction replace0(chaine, motif, remplacement) ci-dessous.
function replace0(chaine, motif, remplacement) {
  return chaine.replace(motif, remplacement);
}

// Exercice 23
// Créez la fonction replaceAll0(chaine, motif, remplacement) ci-dessous.
function replaceAll0(chaine, motif, remplacement) {
  return chaine.replaceAll(motif, remplacement);
}

// Exercice 24
// Créez la fonction slice0(chaine, debut) ci-dessous.
function slice0(chaine, debut) {
  return chaine.slice(debut);
}

// Exercice 25
// Créez la fonction slice1(chaine, debut, fin) ci-dessous.
function slice1(chaine, debut, fin) {
  return chaine.slice(debut, fin);
}

// Exercice 26
// Créez la fonction slice2(chaine, nombre) ci-dessous.
function slice2(chaine, nombre) {
  return chaine.slice(chaine.length - nombre);
}

// Exercice 27
// Créez la fonction slice3(chaine) ci-dessous.
function slice3(chaine) {
  return chaine.slice(3, -3);
}

// Exercice 28
// Créez la fonction slice4(chaine, debut) ci-dessous.
function slice4(chaine, debut) {
  return chaine.slice(debut, -1);
}

// Exercice 29
// Créez la fonction slice5(chaine) ci-dessous.
function slice5(chaine) {
  return chaine.slice(-5, -2);
}

// Exercice 30
// Créez la fonction split0(chaine) ci-dessous.
function split0(chaine) {
  return chaine.split("");
}

// Exercice 31
// Créez la fonction split1(chaine) ci-dessous.
function split1(chaine) {
  return chaine.split(" ");
}

// Exercice 32
// Créez la fonction split2(chaine, max) ci-dessous.
function split2(chaine, max) {
  return chaine.split(" ", max);
}

// Exercice 33
// Créez la fonction split3(csv, separateur) ci-dessous.
function split3(csv, separateur) {
  return csv.split(separateur);
}

// Exercice 34
// Créez la fonction startsWith0(chaine, motif) ci-dessous.
function startsWith0(chaine, motif) {
  return chaine.startsWith(motif);
}

// Exercice 35
// Créez la fonction startsWith1(chaine, motif) ci-dessous.
function startsWith1(chaine, motif) {
  return chaine.startsWith(motif, 4);
}

// Exercice 36
// Créez la fonction toLowerCase0(chaine) ci-dessous.
function toLowerCase0(chaine) {
  return chaine.toLowerCase();
}

// Exercice 37
// Créez la fonction toUpperCase0(chaine) ci-dessous.
function toUpperCase0(chaine) {
  return chaine.toUpperCase();
}

// Exercice 38
// Créez la fonction trim0(chaine) ci-dessous.
function trim0(chaine) {
  return chaine.trim();
}

// Exercice 39
// Créez la fonction trimStart0(chaine) ci-dessous.
function trimStart0(chaine) {
  return chaine.trimStart();
}

// Exercice 40
// Créez la fonction trimEnd0(chaine) ci-dessous.
function trimEnd0(chaine) {
  return chaine.trimEnd();
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Vérification de jauge
// Créez la fonction verifierJauge(valeur) ci-dessous.
function verifierJauge(valeur) {
  let valeurIndex = valeur.lastIndexOf("#") + 1;
  let middleLongueur = valeur.length / 2;
  return valeurIndex >= middleLongueur;
}

// Exercice 1 — Création de jauge
// Créez la fonction creerJauge(pourcentage) ci-dessous.
function creerJauge(pourcentage) {
  let nombre = pourcentage / 10;
  let symbole = "#";
  let result = symbole.repeat(nombre).padEnd(10, " ");
  return result;
} // Exercice 2 — Compteur de voyelles
// Créez la fonction compteurVoyelles(phrase) ci-dessous.
function compteurVoyelles(phrase) {
  const voyelles = "aeiouy";
  let compteur = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
      compteur++;
    }
  }

  return compteur;
}

// Exercice 3 — Compteur de consonnes
// Créez la fonction compteurConsonnes(phrase) ci-dessous.
function compteurConsonnes(phrase) {
  const voyelles = "bcdfghjklmnpqrstvwxz";
  let compteur = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
      compteur++;
    }
  }

  return compteur;
}

// Exercice 4 — Kebab case
// Créez la fonction kebabCase(chaine) ci-dessous.
function kebabCase(chaine) {
  // return chaine.split(' ').join('-').toLowerCase()
  return chaine.toLowerCase().replaceAll(" ", "-");
}

// Exercice 5 — Camel case
// Créez la fonction camelCase(chaine) ci-dessous.
function camelCase(chaine) {
  // On met la chaine en minuscules...
  let chaineMinuscules = chaine.toLowerCase();
  // On scinde la chaîne en mots qu'on stocke dans un tableau
  let mots = chaineMinuscules.split(" ");
  // On initialise le résultat avec le premier mot en minuscules
  let resultat = mots[0];

  // Pour chaque mot sauf le 1er...
  for (let i = 1; i < mots.length; i++) {
    let mot = mots[i];

    // On met la 1ere lettre en majuscule
    let premiereLettreEnMaj = mot[0].toUpperCase();

    // On découpe le reste du mot sans la 1ere lettre
    let resteDuMot = mot.slice(1);

    // On concatène le tout pour reformer le mot avec la majuscule
    let motAvecPremiereLettreEnMaj = premiereLettreEnMaj.concat(resteDuMot);
    resultat = resultat.concat(motAvecPremiereLettreEnMaj);
  }
  return resultat;
}

// Exercice 6 — Tri de mots
// Créez la fonction triDeMots(liste) ci-dessous.

function triDeMots(liste) {
  // Pour cet exercice j'ai fait le choix d'utiliser [i]
  // à la place de charAt(i), les 2 sont identiques, [i]
  // est plus compact et souvent beaucoup plus utilisé !

  let voyelles = "aeiouy";
  let resultat = "";

  // On récupère la liste des mots dans un tableau
  let listeDeMots = liste.split(",");

  // Pour chaque mot...
  for (let i = 0; i < listeDeMots.length; i++) {
    let mot = listeDeMots[i];

    // On regarde si la 1ère lettre et la derniere
    // sont des voyelles
    let premiereLettre = mot[0];
    let derniereLettre = mot.slice(-1);
    if (
      voyelles.includes(premiereLettre) &&
      voyelles.includes(derniereLettre)
    ) {
      // Si oui, on ajoute ce mot à la liste finale avec une virgule
      resultat = resultat.concat(mot, ",");
    }
  }

  // On retire la dernière virgule en trop
  resultat = resultat.slice(0, -1);
  return resultat;

  // Plutôt que d'utiliser une chaîne de caractères on peut
  // aussi utiliser un tableau et join pour générer la chaîne
  // de caractères finale, c'est ce qu'on fera dans l'exercice
  // suivant
}

// Exercice 7 — Légumes
// Créez la fonction legumes(liste) ci-dessous.
function legumes(liste) {
  // lister les legumes
  let legumes = "carotte,haricot,chou,aubergine";

  // transformer chaque element de liste string en tableau
  let listing = liste.split(",");

  // preparer un resultat vide
  let resultat = [];

  // checker chaque element de la liste s'il a des legumes
  //    si oui, on envoie l'élement dans le resultat

  for (let i = 0; i < listing.length; i++) {
    const element = listing[i];
    if (legumes.includes(element)) resultat.push(element);
  }

  return resultat.join(",");
}

// Exercice 8 — Décodeur
// Créez la fonction decodeur(secret) ci-dessous.
function decodeur(secret) {
  // determiner les emplacements des doubles #
  let sequenceDebut = secret.indexOf("##") + 2;
  let sequenceFin = secret.lastIndexOf("##");

  // decouper entre les doubles #
  let sequence = secret.slice(sequenceDebut, sequenceFin);

  // replacer les numeros par des lettres, et les - par des espaces
  let chiffres = "134580-";
  let lettres = "ieasbo ";

  for (let i = 0; i < chiffres.length; i++) {
    sequence = sequence.replaceAll(chiffres[i], lettres[i]);
  }

  return sequence;
}

// Exercice 9 — Extraction de noms
// Créez la fonction extraireNoms(liste) ci-dessous.
function extraireNoms(liste) {
  let resultat = "";

  // On scinde la liste sous la forme d'un tableau contenant
  // des couples nom:X;prénom:Y (ou prénom:Y;nom:X)
  let personnes = liste.split(",");

  // Pour chaque personne, on extrait juste le nom
  for (let i = 0; i < personnes.length; i++) {
    let personne = personnes[i];

    // Le couple nom;prénom est toujours séparé par un point-virgule
    // On récupère le nom et prénom dans un tableau identite
    let identite = personne.split(";");

    // identite vaut ["nom:X", "prénom:Y"] ou ["prénom:Y", "nom:X"]
    // On cherche le nom et on concatène celui-ci au résultat

    for (let j = 0; j < identite.length; j++) {
      if (identite[j].startsWith("nom:")) {
        // On extrait juste le nom, soit les caractères juste après
        // le préfixe "nom:" (donc à partir de l'index 4)
        let nom = identite[j].slice(4);
        // On le met en majuscules et on l'ajoute au résultat
        resultat = resultat.concat(nom.toUpperCase(), ",");
      }
    }
  }
  // On retire la dernière virgule en trop du résultat
  return resultat.slice(0, -1);
}

// Exercice 10 — Tableur (difficile)
function tableur(liste) {
  // Tous les espaces vont être déterminés par la taille max des
  // noms et prénoms ! Il faut donc les calculer en 1er.

  // Pour chaque personne on va extraire le prénom et le nom.
  // On stockera tous les prénoms ensemble et noms ensemble.
  let personnes = liste.split(",");
  let prenoms = [];
  let noms = [];
  for (let i = 0; i < personnes.length; i++) {
    let personne = personnes[i];
    // personne contient par exemple "Tom REDOCEMIA"
    let prenomEtNom = personne.split(" ");
    // Le prénom est le premier mot
    let prenom = prenomEtNom[0];
    // Le nom est le second mot
    let nom = prenomEtNom[1];
    // On ajoute le prenom et le nom à chaque tableau
    prenoms.push(prenom);
    noms.push(nom);
  }

  // Maintenant qu'on a tous les prénoms et noms, on va chercher
  // le plus long prenom et nom. On initialise les valeurs à la
  // taille du mot "Prénom" et "Nom" dans le header. En effet, si
  // tous les prénoms sont plus petits que "Prénom" alors il faudra
  // que la colonne fasse la taille de "Prénom" au minimum !
  let taillePlusLongPrenom = "Prénom".length;
  let taillePlusLongNom = "NOM".length;
  // On commence par les prénoms
  for (let i = 0; i < prenoms.length; i++) {
    if (prenoms[i].length > taillePlusLongPrenom) {
      taillePlusLongPrenom = prenoms[i].length;
    }
  }
  // Pareil pour les noms
  for (let i = 0; i < noms.length; i++) {
    if (noms[i].length > taillePlusLongNom) {
      taillePlusLongNom = noms[i].length;
    }
  }

  // Maintenant on peut créer les espaces manquants facilement
  let resultat = "Prénom".padStart(taillePlusLongPrenom);
  // On ajoute les 3 espaces de séparation des colonnes;
  resultat += "   "; // équivalent à resultat = resultat + "   "
  resultat += "NOM".padStart(taillePlusLongNom);

  // Il ne reste plus qu'à ajouter les prénoms et noms
  for (let i = 0; i < prenoms.length; i++) {
    // On ajoute un saut à la ligne
    resultat += "\n";
    resultat += prenoms[i].padStart(taillePlusLongPrenom);
    resultat += "   ";
    resultat += noms[i].padStart(taillePlusLongNom);
  }
  return resultat;
}

// Exercice 11 — Ville ou pays ? (difficile)
function villeOuPays(liste) {
  // Voici les noms de référence pour les villes et pays
  let listeVilles = ["Paris", "Londres", "Rome", "Berlin"];
  let listePays = ["France", "Royaume-Uni", "Italie", "Allemagne"];
  let resultat = [];

  // On commence par extraire chaque nom dans un tableau
  let noms = liste.split(",");
  // Pour chaque nom, on vérifie si c'est une ville ou un pays
  for (let i = 0; i < noms.length; i++) {
    let nom = noms[i];
    // Le nom peut être mal formaté, on retire les espaces en trop
    nom = nom.trim();
    // On le met en minuscules avant comparaison
    nom = nom.toLowerCase();

    // On le compare avec notre liste de villes
    for (let i = 0; i < listeVilles.length; i++) {
      let ville = listeVilles[i];
      // On fait la comparaison en minuscules pour éviter les
      // problèmes de formatage des lettres (majuscules/minuscules)
      if (ville.toLowerCase() === nom) {
        // C'est une ville, on l'ajoute à résultat, ici on utilise
        // ville qui contient le nom de la ville correctement
        // formatée (c'est notre référence)
        resultat.push("VILLE:" + ville);
      }
    }

    // On le compare avec notre liste de pays
    for (let i = 0; i < listePays.length; i++) {
      let pays = listePays[i];
      // On fait la comparaison en minuscules pour éviter les
      // problèmes de formatage des lettres (majuscules/minuscules)
      if (pays.toLowerCase() === nom) {
        // C'est un pays, on l'ajoute à résultat, ici on utilise
        // pays qui contient le nom du pays correctement
        // formaté (c'est notre référence)
        resultat.push("PAYS:" + pays);
      }
    }
  }

  // On construit la chaîne finale avec join()
  return resultat.join(",");
}
