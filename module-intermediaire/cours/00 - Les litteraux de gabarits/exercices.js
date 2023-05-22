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

// Exercice 0
// Déclarez une fonction merci(prenom, nomSociete) et faites lui retourner
// une template string qui correspond à la solution de l'énoncé

function merci(prenom, nomSociete) {
    return `C'est ${prenom} qui m'a permis d'entrer dans ${nomSociete}`;
  }
  
  merci(Tom, MagiciensDuCode);
  
  // Exercice 1
  // Déclarez une fonction formaterAdresse(prenom, nom, adresse, codePostal, ville)
  // et faites lui retourner une template string qui correspond à la solution de l'énoncé
  
  function formaterAdresse(prenom, nom, adresse, codePostal, ville) {
    return `===[ Destinataire ]===
  ${prenom} ${nom}
  ${adresse}
  ${codePostal} ${ville}`;
  }
  
  // Exercice 2
  // Déclarez une fonction convertirEnSemaines(nombreDeJours) et faites lui retourner
  // une template string qui correspond à la solution de l'énoncé
  
  function convertirEnSemaines(nombreDeJours) {
    return `${nombreDeJours} jours sont équivalents à ${
      nombreDeJours / 7
    } semaines`;
  }
  
  // Exercice 3
  // Déclarez une fonction templateString() et faites lui retourner
  // une template string qui correspond à la solution de l'énoncé
  
  function templateString() {
    return `Les template strings sont délimitées par des backticks \`\`.
  Pour créer un espace réservé on utilise \${}.`;
  }
  
  // Exercice 4
  // Déclarez une fonction convertirEnSemainesEtJours(nombreDeJours) et faites lui retourner
  // une template string qui correspond à la solution de l'énoncé.
  // Faites bien attention aux différents pluriels et bon courage !
  
  function convertirEnSemainesEtJours(nombreDeJours) {
    return `${nombreDeJours} ${nombreDeJours >= 2 ? `jours` : `jour`
    }, c'est équivalent à ${Math.floor(nombreDeJours / 7)} ${
      nombreDeJours  <=7 ? `semaine` : `semaines`
    } et ${nombreDeJours % 7} ${nombreDeJours % 7 > 1 ? `jours` : `jour`}`;
  }
  
  convertirEnSemainesEtJours(8);
  
  // Exercice 5
  // 1. Décommentez le code de Tom ci-dessous pour pouvoir utiliser sa fonction formaterNumeroClient
  // 2. Rédigez une fonction retournerReference(numeroClient) qui retourne la template string
  // permettant de répondre à l'énoncé
  
  // function formaterNumeroClient(numero) {
  //   if (numero >= 5000 && numero < 7000) {
  //     // On peut retourner tout de suite la valeur en utilisant le mot-clé return
  //     return "PR" + numero;
  //   } else {
  //     let prefixe = "42";
  //     if (numero < 1000) {
  //       prefixe = prefixe + "0";
  //     }
  //     if (numero < 100) {
  //       prefixe = prefixe + "0";
  //     }
  //     if (numero < 10) {
  //       prefixe = prefixe + "0";
  //     }
  //     return prefixe + numero;
  //   }
  // }
  
  // Déclarez votre fonction retournerReference(numeroClient) ci-dessous
  