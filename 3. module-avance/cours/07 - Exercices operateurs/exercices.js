/* Exercices de remaniement de code avec les nouveaux opérateurs */

// Exercice 0
function getDatabaseHost(process) {
  // let databaseHost;

  // if (process.env.DB_HOST) {
  //   databaseHost = process.env.DB_HOST;
  // } else {
  //   databaseHost = 'localhost';
  // }

  // process.env.DB_HOST
  //   ? (databaseHost = process.env.DB_HOST)
  //   : (databaseHost = "localhost");

  return process.env.DB_HOST || "localhost";
}

// Exercice 1
function definirIndentation(type, quantite) {
  // if (!type) {
  //   type = "espaces";
  // }
  // if (!quantite) {
  //   quantite = 2;
  // }
  return `${quantite || 2} ${type || "espaces"}`;
}

// Exercice 2
function getPaddingMax(pixels) {
  // if (pixels === null || pixels === undefined) {
  //   pixels = 0;
  // }

  // pixels += 8;

  // if (pixels > 64) {
  //   return 64;
  // } else {
  //   return pixels;
  // }

  pixels ??= 0;
  return pixels + 8 > 64 ? 64 : pixels + 8;
}

// Alternative 2
// function getPaddingMax(pixels) {
//   pixels ??= 0;
//   return Math.min(pixels + 8, 64);
// }

// Exercice 3
function extraireNumeroAdresse(client) {
  //   if (client && client.adresse) {
  //     return client.adresse.numero;
  //   } else {
  //     return undefined;
  //   }
  // }

  return client?.adresse?.numero;
}

// Exercice 4
function extraireNumeroAdresseOuErreur(client) {
  //   if (client && client.adresse) {
  //     return client.adresse.numero;
  //   } else {
  //     return "Erreur";
  //   }

  return client?.adresse?.numero ?? "Erreur";
}
