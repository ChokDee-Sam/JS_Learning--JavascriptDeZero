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

/*
Pour cette leçon, pas d'exercices avec des algorithmes, seulement de la
pratique sur comment lire une expression JavaScript !

L'objectif va être de réussir à dire à quelle valeur seront évaluées les
expressions ci-dessous.

Pour vérifier vos résultats, reportez-vous au fichier solutions.js.

Aidez-vous également de la précédence des opérateurs, la doc est ici :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Pr%C3%A9c%C3%A9dence_des_op%C3%A9rateurs

Ne vous inquiétez pas si vous n'y arrivez pas, prenez cet exercice plus comme
un jeu ou un petit challenge.

Bon courage !
*/

// Quelques variables utiles créer des expressions...
let nombre = 42
let chaine = "chaine"
let nul = null;
let vrai = true;
let faux = false;
let indefini = undefined;

// On commence par des expressions faciles
!chaine // false
!!!!vrai // true
!!!nombre // false
chaine + !nombre // chainefalse
vrai + nombre // true vaut 1, donc 43
3 * vrai + nombre - 2 // 43
vrai + faux // 1 + rien = 1
12 / "6" // 2
12 / "6" + indefini //NaN
chaine + 15 + 3 // chaine153
15 + 3 + chaine // 18chaine
"" * 2 + 42 // 42

// Un peu plus difficile...
12 / ("6" + indefini)   // NaN
12 / nul                // Infinity
"foo" + + "bar"         // fooNaN
nombre +++ chaine       // 42chaine
chaine +++ nombre       // NaN
!!"false" === !!"true"  // true
nul + 1                 // 1
--nombre + "5"          // 415
(--nombre + "5") * ""   // 0
(--nombre + "5") * vrai // 415
--nombre+ + "5"         // 46
3 > 2 > 1               // false
1 + - + 1               // 0
1 + - + - + 1           // 2