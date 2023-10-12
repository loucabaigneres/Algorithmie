class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        let random = Math.floor(Math.random() * 100);
        if (random < this.luck) {
            return true;
        } else {
            return false;
        }
    }

    attackPokemon(otherPokemon) {
        let degats = this.attack - otherPokemon.defense;
        if (degats > 0) {
            otherPokemon.hp -= degats;
        }
        console.log(
            this.name +
                " réussit son attaque contre " +
                otherPokemon.name +
                " et lui inflige " +
                degats +
                " dégâts."
        );
    }
}

let Nicastor = new Pokemon("Nicastor", 20, 10, 100, 50);
let Alexitron = new Pokemon("Alexitron", 20, 10, 100, 50);

while (Nicastor.hp > 0 && Alexitron.hp > 0) {
    if (Nicastor.isLucky()) {
        Nicastor.attackPokemon(Alexitron);

        console.log("Il reste " + Alexitron.hp + " HP à " + Alexitron.name);

        if (Alexitron.hp <= 0) {
            console.log(
                Alexitron.name +
                    " est K.O. " +
                    Nicastor.name +
                    " remporte le combat !"
            );
            break;
        }
    } else {
        console.log(
            Nicastor.name + " rate son attaque contre " + Alexitron.name
        );
    }

    if (Alexitron.isLucky()) {
        Alexitron.attackPokemon(Nicastor);

        console.log("Il reste " + Nicastor.hp + " HP à " + Nicastor.name);

        if (Nicastor.hp <= 0) {
            console.log(
                Nicastor.name +
                    " est K.O." +
                    Alexitron.name +
                    " remporte le combat !"
            );
            break;
        }
    } else {
        console.log(
            Alexitron.name + " rate son attaque contre " + Nicastor.name
        );
    }
}
