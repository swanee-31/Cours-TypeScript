// 1. Contrat commun : l'interface Animal
interface Animal {
  nom: string;
  age: number;
  crier(): string;
  sePresenter(): string;
}

// 2. Implémentation dans des classes concrètes
class Chien implements Animal {
  constructor(
    public nom: string,
    public age: number,
    public race: string // Propriété spécifique au Chien
  ) {}

  crier(): string {
    return "Wouf ! Wouf !";
  }

  sePresenter(): string {
    return `Chien : ${this.nom} (${this.race}), ${this.age} ans`;
  }
}

class Chat implements Animal {
  constructor(
    public nom: string,
    public age: number,
    public estInterieur: boolean // Propriété spécifique au Chat
  ) {}

  crier(): string {
    return "Miaou !";
  }

  sePresenter(): string {
    const lieu = this.estInterieur ? "d'intérieur" : "d'extérieur";
    return `Chat : ${this.nom} (chat ${lieu}), ${this.age} ans`;
  }
}

class Cheval implements Animal {
  constructor(
    public nom: string,
    public age: number,
    public vitesseMax: number // Propriété spécifique au Cheval
  ) {}

  crier(): string {
    return "Hiiiiii !";
  }

  sePresenter(): string {
    return `Cheval : ${this.nom} (jusqu'à ${this.vitesseMax} km/h), ${this.age} ans`;
  }
}

// 3. Instanciation et stockage dans un seul tableau typé Animal[] (Polymorphisme)
const refuge: Animal[] = [
  new Chien("Rex", 4, "Berger Allemand"),
  new Chat("Misty", 2, true),
  new Cheval("Tornade", 7, 65)
];

// 4. Affichage uniforme en mode console (avec la fonction du bonus)
function afficherRefuge(animaux: Animal[]): void {
  console.log("=== Pensionnaires du refuge ===");
  
  animaux.forEach((animal) => {
    // TypeScript garantit que chaque élément possède sePresenter() et crier()
    console.log(`${animal.sePresenter()} -> "${animal.crier()}"`);
  });
}

afficherRefuge(refuge);