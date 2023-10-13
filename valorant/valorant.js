let Attackers = [
    "Omen Att",
    "Phoenix Att",
    "Jett Att",
    "Fade Att",
    "Chamber Att",
];
let Defenders = [
    "Omen Déf",
    "Phoenix Déf",
    "Jett Déf",
    "Fade Déf",
    "Chamber Déf",
];

let scoreAttack = 0;
let scoreDefense = 0;

function choiceKill() {
    if (plantSpike === true) {
        if (Math.random() * 100 < 70) {
            let randomAttacker = Math.floor(Math.random() * Attackers.length);
            let randomDefender = Math.floor(Math.random() * Defenders.length);
            console.log(
                Attackers[randomAttacker] +
                    " et " +
                    Defenders[randomDefender] +
                    " se rencontrent !"
            );
            console.log(
                Attackers[randomAttacker] +
                    " a tué " +
                    Defenders[randomDefender]
            );
            Defenders.splice(randomDefender, 1);
        } else {
            let randomDefender = Math.floor(Math.random() * Defenders.length);
            let randomAttacker = Math.floor(Math.random() * Attackers.length);
            console.log(
                Defenders[randomDefender] +
                    " et " +
                    Attackers[randomAttacker] +
                    " se rencontrent !"
            );

            console.log(
                Defenders[randomDefender] +
                    " a tué " +
                    Attackers[randomAttacker]
            );
            Attackers.splice(randomAttacker, 1);
        }
    } else {
        if (Math.random() * 100 < 50) {
            let randomAttacker = Math.floor(Math.random() * Attackers.length);
            let randomDefender = Math.floor(Math.random() * Defenders.length);
            console.log(
                Attackers[randomAttacker] +
                    " et " +
                    Defenders[randomDefender] +
                    " se rencontrent !"
            );
            console.log(
                Attackers[randomAttacker] +
                    " a tué " +
                    Defenders[randomDefender]
            );
            Defenders.splice(randomDefender, 1);
        } else {
            let randomDefender = Math.floor(Math.random() * Defenders.length);
            let randomAttacker = Math.floor(Math.random() * Attackers.length);
            console.log(
                Defenders[randomDefender] +
                    " et " +
                    Attackers[randomAttacker] +
                    " se rencontrent !"
            );

            console.log(
                Defenders[randomDefender] +
                    " a tué " +
                    Attackers[randomAttacker]
            );
            Attackers.splice(randomAttacker, 1);
        }
    }
}

function plantSpike() {
    let plantingSpike = Math.random() * 100;
    if (Attackers.length > Defenders.length) {
        if (plantingSpike < 60) {
            console.log("L'équipe des attaquants a planté le Spike !");
            return true;
        } else {
            console.log(
                "L'équipe des attaquants a échoué à planter le Spike !"
            );
            return false;
        }
    } else if (Defenders.length > Attackers.length) {
        if (plantingSpike < 40) {
            console.log("L'équipe des attaquants a planté le Spike !");
            return true;
        } else {
            console.log(
                "L'équipe des attaquants a échoué à planter le Spike !"
            );
            return false;
        }
    }
}

while (scoreAttack < 13 && scoreDefense < 13) {
    Attackers = [
        "Omen Att",
        "Phoenix Att",
        "Jett Att",
        "Fade Att",
        "Chamber Att",
    ];
    Defenders = [
        "Omen Déf",
        "Phoenix Déf",
        "Jett Déf",
        "Fade Déf",
        "Chamber Déf",
    ];

    let plantSpikeCalled = false;

    let roundNumber = scoreAttack + scoreDefense + 1;
    console.log("Début de la manche " + roundNumber + " !");

    while (Attackers.length > 0 && Defenders.length > 0) {
        choiceKill();
        if (!plantSpikeCalled) {
            plantSpike();
            plantSpikeCalled = true;
        }
    }
    if (Attackers.length === 0) {
        scoreDefense++;
        console.log(
            "Les Défenseurs ont maintenant un score de " +
                scoreDefense +
                ", contre un score de " +
                scoreAttack +
                " chez les Attaquants."
        );
    } else if (Defenders.length === 0) {
        scoreAttack++;
        console.log(
            "Les Attaquants ont maintenant un score de " +
                scoreAttack +
                ", contre un score de " +
                scoreDefense +
                " chez les Défenseurs."
        );
    }
}
