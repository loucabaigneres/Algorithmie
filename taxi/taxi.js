const musics = [
    "Anissa",
    "Bohemian Rhapsody",
    "Sparks",
    "Bubbly",
    "Rocket Man",
];

const personnage = {
    name: "John",
    mental: 10,
};

const trajet = {
    radio: musics[Math.floor(Math.random() * musics.length)], // Sélection aléatoire d'une musique
    redLights: 30,
    changes: 0,
};

for (let i = 0; i < trajet.redLights; ) {
    trajet.redLights -= 1;
    trajet.radio = musics[Math.floor(Math.random() * musics.length)];

    console.log(
        "La musique jouée est " +
            trajet.radio +
            ". Il reste " +
            trajet.redLights +
            " feux rouges."
    );

    if (trajet.radio === "Anissa") {
        personnage.mental -= 1;
        console.log(
            personnage.name +
                " a perdu 1 de santé mentale. Il lui reste " +
                personnage.mental +
                " de santé mentale."
        );
        trajet.changes += 1;
    }

    if (personnage.mental === 0) {
        console.log("Explosion !");
        break;
    }
}

if (trajet.redLights <= 0) {
    console.log(
        "John est arrivé chez lui après " +
            trajet.changes +
            " changements de taxi."
    );
}
