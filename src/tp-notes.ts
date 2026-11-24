// 2. Types de base et Tuple
const nomPromo: string = "B2DEV";
const estModuleActif: boolean = true;
const notes: number[] = [12, 8.5, 16, 9, 14.5, 18, 7];
const major: [string, number] = ["Alice", 18];

// 3. Fonctions typées
function calculerMoyenne(listeNotes: number[]): number {
  if (listeNotes.length === 0) return 0;
  const somme = listeNotes.reduce((acc, note) => acc + note, 0); // Méthode de callback pour réduire le tableau à une seule valeur (la somme)
  return somme / listeNotes.length;
}

function appliquerBonus(note: number, bonus: number = 1): number {
  const nouvelleNote = note + bonus;
  return nouvelleNote > 20 ? 20 : nouvelleNote;
}

function afficherBilan(promo: string, moyenne: number, remarque?: string): void {
  console.log(`=== Bilan de la promo ${promo} ===`);
  console.log(`Moyenne générale : ${moyenne.toFixed(2)} / 20`);
  if (remarque) {
    console.log(`Remarque : ${remarque}`);
  }
}

// 4. Fonctions fléchées et méthodes de tableaux
const estAdmis = (note: number): boolean => note >= 10;

const notesValides: number[] = notes.filter((n) => estAdmis(n));
const notesBonifiees: number[] = notes.map((n) => appliquerBonus(n, 1.5));

console.log(`Notes >= 10 avant bonus : ${notesValides.length} / ${notes.length}`);
console.log("Notes après bonus (+1.5) :");
notesBonifiees.forEach((n, index) => {
  console.log(`  Étudiant #${index + 1} : ${n}/20`);
});

// 5. Affichage final
if (estModuleActif) {
  const moyenneBonifiee = calculerMoyenne(notesBonifiees);
  afficherBilan(nomPromo, moyenneBonifiee, "Bonne progression générale !");
  console.log(`Major de promo : ${major[0]} avec ${major[1]}/20`);
}

// Bonus 1 : Retour implicite d'un objet (parenthèses obligatoires)
const creerFicheMajor = (nom: string, note: number) => ({ nom, note });
const ficheMajor = creerFicheMajor(major[0], major[1]);
console.log("Fiche major :", ficheMajor);

// Bonus 2 : Tests d'erreurs de typage (à commenter pour compiler)
// appliquerBonus("15"); // Erreur : Argument of type 'string' is not assignable to parameter of type 'number'.
// notes.push("absent"); // Erreur : Argument of type 'string' is not assignable to parameter of type 'number'.