/*
 * Tapez votre code sous chacun des commentaires.
 * Vous devez faire les exercices dans l'ordre !
 *
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com.
 *
 * Merci et bon courage ! 🤘
 */

/*****************************************************************************
 *          📣 OYEZ OYEZ BRAVES DÉVELOPPEURS ET DÉVELOPPEUSES ! 📣            *
 *****************************************************************************
 *
 * Pour faire ces exercices, lisez attentivement les instructions suivantes.
 *
 * Pour tester votre code, j'utilise des fonctions (qu'on verra bientôt dans
 * le cours ;-) !). Leur déclaration ressemble à ça :
 *
 * function nomFonction(variable1, variable2) {
 *   ...
 * }
 *
 * Ne supprimez pas ces fonctions ! Ne supprimez pas non plus l'accolade
 * fermante du bloc d'instructions de ces fonctions.
 *
 * Insérez votre code à l'intérieur des fonctions, et tout ira bien !
 *
 * Lisez tous les commentaires partout, merci ! 👍
 */

// Exercice 0
function exercice0(prochainClient) {
  // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez l'instruction prochainClient.mesurerPoids() pour récupérer la valeur du poids du
  // prochain client. N'oubliez pas de mettre les parenthèses "()" à la fin de cette instruction !

  // Décommentez le code de Tom ci-dessous
  let poidsClient = prochainClient.mesurerPoids();
  console.log(poidsClient + " kg");

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Exercice 1
function exercice1(prochainClient) {
  // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>

  // Décommentez le code de Tom ci-dessous
  let poidsClient = prochainClient.mesurerPoids();
  console.log(poidsClient);
  poidsClient = prochainClient.mesurerPoids();
  console.log(poidsClient);

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Exercice 2
function exercice2(prochainClient) {
  // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>

  // Décommentez le code de Tom ci-dessous

  // let poidsClient = prochainClient.mesurerPoids();
  // // let poidsClient
  // while ((prochainClient.mesurerPoids() = 0)) {
  //   poidsClient = prochainClient.mesurerPoids();
  //   console.log(poidsClient);
  // }
  // console.log(poidsClient);

  let poidsClient = prochainClient.mesurerPoids();
  while (poidsClient !== 0) {
    console.log(poidsClient);
    poidsClient = prochainClient.mesurerPoids();
  }

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Exercice 3
function exercice3(nombreDeTours) {
  // Ne supprimez/commentez pas cette ligne
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable nombreDeTours qui contient le nombre de tours à faire pour la file d'attente actuelle
  // Décommentez le code de Tom ci-dessous

  let duree = nombreDeTours * 12;
  let nombreHeures = 0;
  let nombreMinutes = 0;

  while (duree >= 60) {
    nombreHeures = nombreHeures + 1;
    duree = duree - 60;
  }

  nombreMinutes = duree;

  if (nombreHeures < 10) {
    nombreHeures = "0" + nombreHeures;
  }

  if (nombreMinutes < 10) {
    nombreMinutes = "0" + nombreMinutes;
  }

  console.log(nombreHeures + "h" + nombreMinutes);

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Exercice 4
function exercice4(longueurGuirlande) {
  // Ne supprimez/commentez pas cette ligne
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable longueurGuirlande qui contient le nombre d'étoiles à afficher pour la guirlande
  // Décommentez le code de Tom ci-dessous

  let ligne = "";
  for (let compteur = 0; compteur < longueurGuirlande; compteur++) {
    ligne = ligne + "*";
  }
  console.log(ligne);

  // console.log(longueurGuirlande); ????????????????? pourquoi c'est là ??

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Exercice 5
function exercice5(longueurGuirlande) {
  // Ne supprimez/commentez pas cette ligne
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable longueurGuirlande qui contient la longueur de la guirland à afficher
  // Décommentez le code de Tom ci-dessous

  let ligne = "";
  let symbole = "*";

  for (let i = 0; i < longueurGuirlande; i = i + 1) {
    ligne = ligne + symbole;

    if (symbole === "*") {
      symbole = "o";
    } else {
      symbole = "*";
    }
  }

  console.log(ligne);

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Chassez le bogue ! 0
function exercice6(largeurTriangle) {
  // Ne supprimez/commentez pas cette ligne
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable largeurTriangle qui contient la largeur du triangle à afficher
  // Décommentez le code de Tom ci-dessous




  let ligne = "";

  for (let longueurLigne = largeurTriangle; longueurLigne > 0; longueurLigne = longueurLigne - 2) {

    // On construit la ligne à afficher
    for (let position = 0; position < longueurLigne; position = position + 1) {
      ligne = ligne + "*";
    }

    console.log(ligne);
    ligne = "";

  }



  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Chassez le bogue ! 1
function exercice7(largeurTriangle) {
  // Ne supprimez/commentez pas cette ligne
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable largeurTriangle qui contient la largeur du triangle à afficher
  // Décommentez le code de Tom ci-dessous
  let ligne = "";

  for (let longueurLigne = 1; longueurLigne <= largeurTriangle; longueurLigne = longueurLigne + 2) {
  
    // On construit la ligne à afficher
    for (let position = 0; position < longueurLigne; position = position + 1) {
      ligne = ligne + "*";
    }
    console.log(ligne);
    ligne = "";
  }
  
  
  for (let longueurLigne = largeurTriangle - 2; longueurLigne > 0; longueurLigne = longueurLigne - 2) {
    
    // On construit la ligne à afficher
    for (let position = 0; position < longueurLigne; position = position + 1) {
      ligne = ligne + "*";
    }
    console.log(ligne);
    ligne = "";
  }
  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante

// Exercice 8
function exercice8(prochainClient) {
  // Ne supprimez/commentez pas cette ligne
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Décommentez le code de Tom ci-dessous
  let poidsClient = prochainClient.mesurerPoids();
  // Somme des poids des clients pour le prochain tour
  let sommePoidsPourCeTour = 0;
  // On compte le nombre de tours à faire en tout pour faire passer tout le monde
  let nombreDeTours = 0;
  
  // Tant qu'il y a des clients...
  while (poidsClient !== 0) {
    // On ajoute leur poids à la somme des poids des clients d'avant
    sommePoidsPourCeTour = sommePoidsPourCeTour + poidsClient;
    // Si cette somme est supérieure à la limite
    if (sommePoidsPourCeTour > 500) {
      // On ajoute un tour au compteur...
      nombreDeTours = nombreDeTours + 1;
      // Le dernier client n'a pas pu aller dans ce tour car il aurait fait
      // dépasser le poids max autorisé, il faut donc compter son poids
      // pour le prochain tour, c'est ce qu'on fait ici
      sommePoidsPourCeTour = poidsClient;
    }
    // On récupère le poids du prochain client
    poidsClient = prochainClient.mesurerPoids();
  }
  
  // Ici on traite le cas particulier d'un client qui est le seul
  // à passer dans le dernier tour.
  if (sommePoidsPourCeTour > 0) {
    nombreDeTours = nombreDeTours + 1;
  }
  
  // On met un 's' final ou pas en fonction du nombre de tours
  if (nombreDeTours === 0 || nombreDeTours === 1) {
    console.log(nombreDeTours + " tour");
  } else {
    console.log(nombreDeTours + " tours");
  }
  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
} // Ne supprimez pas cette accolade fermante
