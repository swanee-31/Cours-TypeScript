// Exemple 1 : La conversion implicite (coercition)
function calculerTotal(prix, quantite) {
  return prix + quantite; // Oups, imaginez qu'on voulait additionner deux prix
}

// Si "prix" vient d'un champ <input> HTML, c'est une chaîne de caractères !
console.log(calculerTotal("50", 20)); // Affiche "5020" au lieu de 70 ! Aucune erreur levée.

// Exemple 2 : Changement de type en cours de route
let age = 21;
console.log(age.toFixed(2)); // Affiche "21.00" (nombre avec 2 décimales)
age = "vingt-et-un"; // JavaScript accepte sans broncher
console.log(age.toFixed(2)); // CRASH à l'exécution (runtime) : age.toFixed is not a function
