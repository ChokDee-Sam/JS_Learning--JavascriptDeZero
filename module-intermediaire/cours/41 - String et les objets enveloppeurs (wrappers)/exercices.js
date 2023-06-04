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

// indexOf      =>  return l'index en parant du début

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
  debugger;
  let valeurIndex = valeur.lastIndexOf("#")+1;
  let middleLongueur = valeur.length / 2;
  return valeurIndex >= middleLongueur;
}

// Exercice 1 — Création de jauge
// Créez la fonction creerJauge(pourcentage) ci-dessous.

// Exercice 2 — Compteur de voyelles
// Créez la fonction compteurVoyelles(phrase) ci-dessous.

// Exercice 3 — Compteur de consonnes
// Créez la fonction compteurConsonnes(phrase) ci-dessous.

// Exercice 4 — Kebab case
// Créez la fonction kebabCase(chaine) ci-dessous.

// Exercice 5 — Camel case
// Créez la fonction camelCase(chaine) ci-dessous.

// Exercice 6 — Tri de mots
// Créez la fonction triDeMots(liste) ci-dessous.

// Exercice 7 — Légumes
// Créez la fonction legumes(liste) ci-dessous.

// Exercice 8 — Décodeur
// Créez la fonction decodeur(secret) ci-dessous.

// Exercice 9 — Extraction de noms
// Créez la fonction extraireNoms(liste) ci-dessous.

// Exercice 10 — Tableur (difficile)
// Créez la fonction tableur(liste) ci-dessous.

// Exercice 11 — Ville ou pays ? (difficile)
// Créez la fonction villeOuPays(liste) ci-dessous.
