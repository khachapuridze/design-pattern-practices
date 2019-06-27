import {ISoldier, IJedi, IJediAdapter} from "./interface";

class Soldier implements ISoldier {

    constructor(public level: number) {
    }

    attack() {
        return this.level * 1;
    }
}

 class Jedi implements IJedi {

    constructor(public level: number) {
    }

    attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements IJediAdapter {

    constructor(public jedi: IJedi) {
    }

    attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter
};