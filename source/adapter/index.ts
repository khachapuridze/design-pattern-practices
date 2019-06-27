import {IJedi, IJediAdapter, ISoldier} from "./interface";

class Soldier implements ISoldier {

    constructor(public level: number) {
    }

    public attack() {
        return this.level * 1;
    }
}

class Jedi implements IJedi {

    constructor(public level: number) {
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements IJediAdapter {

    constructor(public jedi: IJedi) {
  
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter,
};
