let killer = {
    nom: "Jason",
    pv: 100,
};

class Characteristic {
    constructor(name, probDeath, probDamage, probBoth) {
        this.name = name;
        this.probDeath = probDeath;
        this.probDamage = probDamage;
        this.probBoth = probBoth;
    }
}

const characteristics = [
    new Characteristic("Nerd", 0.1, 0.6, 0.1),
    new Characteristic("Sportif", 0.2, 0.5, 0.1),
    new Characteristic("Blonde", 0.2, 0.4, 0.1),
    new Characteristic("Intello", 0.1, 0.7, 0.1),
    new Characteristic("Idiot", 0.3, 0.4, 0.1),
    new Characteristic("Jeune", 0.2, 0.6, 0.1),
    new Characteristic("Vieux", 0.1, 0.7, 0.1),
    new Characteristic("Costaud", 0.2, 0.5, 0.1),
    new Characteristic("Timide", 0.1, 0.6, 0.1),
    new Characteristic("Artiste", 0.1, 0.6, 0.1),
];

let names = [
    "Louca",
    "Raphaël",
    "Léo",
    "Allia",
    "Yani",
    "Nicolas",
    "Alexis",
    "Léora",
    "Alyssia",
];

const survivors = [];
for (let i = 0; i < 5; i++) {
    const randomNameCalc = Math.floor(Math.random() * names.length);
    const randomCharacteristicCalc = Math.floor(
        Math.random() * characteristics.length
    );

    const randomName = names[randomNameCalc];
    const randomCharacteristic = characteristics[randomCharacteristicCalc];

    const survivor = {
        nom: randomName,
        caracteristique: randomCharacteristic,
    };
    survivors.push(survivor);

    names.splice(randomNameCalc, 1);
    characteristics.splice(randomCharacteristicCalc, 1);

    console.log(survivor);
}

function attackingSurvivor(survivor) {
    const characteristic = survivor.caracteristique;
    const prob = Math.random();

    if (characteristic.probDeath > prob) {
        console.log(killer.nom + " tue " + survivor.nom);
        return true;
    } else if (characteristic.probDamage > prob) {
        console.log(
            survivor.nom +
                " esquive et inflige 10 points de dégats à " +
                killer.nom
        );
        killer.pv -= 10;
        console.log(
            "Il ne reste plus que " + killer.pv + "PV à " + killer.nom + "."
        );
        return false;
    } else if (characteristic.probBoth > prob) {
        console.log(
            survivor.nom +
                " se fait tuer par " +
                killer.nom +
                " mais lui inflige 15 points de dégâts avant de mourir."
        );
        killer.pv -= 15;
        console.log(
            "Il ne reste plus que " + killer.pv + "PV à " + killer.nom + "."
        );
        return true;
    }
}

let deadSurvivors = [];

while (killer.pv > 0 && survivors.length > 0) {
    const randomSurvivor =
        survivors[Math.floor(Math.random() * survivors.length)];

    const survivorIsDead = attackingSurvivor(randomSurvivor);

    if (killer.pv <= 0) {
        console.log(killer.nom + " est mort. Les survivants ont gagné !");
        console.log("RIP à : " + deadSurvivors.join(", "));
        break;
    }

    if (survivorIsDead) {
        deadSurvivors.push(randomSurvivor.nom);
        survivors.splice(survivors.indexOf(randomSurvivor), 1);
    }
}

if (killer.pv > 0) {
    console.log("Jason a éliminé les survivants. Game over!");
}
