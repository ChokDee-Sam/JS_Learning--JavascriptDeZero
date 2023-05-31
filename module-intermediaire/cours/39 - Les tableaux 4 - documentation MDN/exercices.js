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

//  ---------------------------------------------------------
//  Les Tableaux modifiés
//  ---------------------------------------------------------
//
// shift() = Retirer le premier element
// unshift() = Ajoute un ou plusieurs premiers éléments

// pop() = Retire le dernier élément
// push() = Ajoute 1 ou plusieurs éléments en fin de tableau

// fill() = remplir tous les éléments d'un tableau. entre deux index avec une valeur statique.
// array.fill(0,2,4)   => fill with 0, from 2(include) to 4(non include)

// reverse() = inverse l'ordre des éléments d'un tableau
// splice() = à partir de tel index, supprime X élément, puis ajoute tel élément,

//  ---------------------------------------------------------
//  Les Nouveaux Tableaux
//  ---------------------------------------------------------

// concat() = fusionner deux ou plusieurs tableaux en les concaténant (new)

//  ---------------------------------------------------------
//  Les Tableaux inchangés (une valeur de return)
//  ---------------------------------------------------------

// indexOf() = Renvoie l'index de notre recherche, en partant du début du tableau
            //array.indexOf('bison', 2)   => recherche l'index bison, à partir de 2eme index
// lastIndexOf = Renvoie l'index de notre recherche, en partant de la fin du tableau

// slice() = Découpe un tableau
// array.slice(2, 4)    => cut from 2(include) to 4(non include)

// includes() = Renvoie true ou false, selon si une valeur est contenue
// join() = Concatene une nouvelle chaîne avec tous les éléments + ce qui les lie

//  ---------------------------------------------------------
//  ---------------------------------------------------------

// Exercice 0
// Créez la fonction concat0(tableau1, tableau2) ci-dessous.

// Exercice 1
// Créez la fonction concat1(tableau, valeur1, valeur2, valeur3) ci-dessous.

// Exercice 2
// Créez la fonction fill0(tableau, valeur) ci-dessous.

// Exercice 3
// Créez la fonction fill1(tableau, valeur, index) ci-dessous.

// Exercice 4
// Créez la fonction fill2(tableau, valeur, debut, fin) ci-dessous.

// Exercice 5
// Créez la fonction fill3(tableau, valeur) ci-dessous.

// Exercice 6
// Créez la fonction includes0(tableau, valeur) ci-dessous.

// Exercice 7
// Créez la fonction includes1(tableau, valeur, debut) ci-dessous.

// Exercice 8
// Créez la fonction includes2(tableau, valeur) ci-dessous.

// Exercice 9
// Créez la fonction indexOf0(tableau, valeur) ci-dessous.

// Exercice 10
// Créez la fonction indexOf1(tableau, valeur, debut) ci-dessous.

// Exercice 11
// Créez la fonction indexOf2(tableau, valeur) ci-dessous.

// Exercice 12
// Créez la fonction join0(tableau) ci-dessous.

// Exercice 13
// Créez la fonction join1(tableau, separateur) ci-dessous.

// Exercice 14
// Créez la fonction lastIndexOf0(tableau, valeur) ci-dessous.

// Exercice 15
// Créez la fonction lastIndexOf1(tableau, valeur) ci-dessous.

// Exercice 16
// Créez la fonction lastIndexOf2(tableau, valeur) ci-dessous.

// Exercice 17
// Créez la fonction pop0(tableau) ci-dessous.

// Exercice 18
// Créez la fonction pop1(tableau) ci-dessous.

// Exercice 19
// Créez la fonction push0(tableau, valeur) ci-dessous.

// Exercice 20
// Créez la fonction push1(tableau, valeur1, valeur2) ci-dessous.

// Exercice 21
// Créez la fonction reverse0(tableau) ci-dessous.

// Exercice 22
// Créez la fonction shift0(tableau) ci-dessous.

// Exercice 23
// Créez la fonction shift1(tableau) ci-dessous.

// Exercice 24
// Créez la fonction slice0(tableau) ci-dessous.

// Exercice 25
// Créez la fonction slice1(tableau, debut, fin) ci-dessous.

// Exercice 26
// Créez la fonction slice2(tableau) ci-dessous.

// Exercice 27
// Créez la fonction slice3(tableau) ci-dessous.

// Exercice 28
// Créez la fonction splice0(tableau) ci-dessous.

// Exercice 29
// Créez la fonction splice1(tableau) ci-dessous.

// Exercice 30
// Créez la fonction splice2(tableau) ci-dessous.

// Exercice 31
// Créez la fonction splice3(tableau, debut, valeur) ci-dessous.

// Exercice 32
// Créez la fonction splice4(tableau, debut, valeur1, valeur2) ci-dessous.

// Exercice 33
// Créez la fonction splice5(tableau, valeur1, valeur2) ci-dessous.

// Exercice 34
// Créez la fonction splice6(tableau, valeur1, valeur2) ci-dessous.

// Exercice 35
// Créez la fonction unshift0(tableau, valeur) ci-dessous.

// Exercice 36
// Créez la fonction unshift1(tableau, valeur1, valeur2) ci-dessous.

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Demi-tour
// Créez la fonction demitour(tableau1, tableau2) ci-dessous.

// Exercice 1 — Remplissage
// Créez la fonction remplissage(mot, taille) ci-dessous.

// Exercice 2 — Extraction
// Créez la fonction extraction(transmission, sequence) ci-dessous.

// Exercice 3 — Camouflage
// Créez la fonction camouflage(transmission, sequence) ci-dessous.

// Exercice 4 — Suppression
// Créez la fonction suppression(transmission, sequence) ci-dessous.

// Exercice 5 — Entrelacement
// Créez la fonction entrelacement(tableau1, tableau2) ci-dessous.

// Exercice 6 — Duplication
// Créez la fonction duplication(quantites, valeurs) ci-dessous.

// Exercice 7 — Sélection
// Créez la fonction selection(selecteur, liste) ci-dessous.

// Exercice 8 — Extraction multiple
// Créez la fonction extractionMultiple(transmission, sequence) ci-dessous.

// Exercice 9 — Extraction multiple incomplète
// Créez la fonction extractionMultiple(transmission, sequence) ci-dessous.
