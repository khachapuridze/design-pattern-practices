import {Battle, KindType} from "./interface";

export function droidProducer(kind: KindType): () => Battle {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

export function battleDroidFactory() {
    return new B1();
}

export function pilotDroidFactory() {
    return new Rx24();
}

export class B1 implements Battle {
    public info() {
        return "B1, Battle Droid";
    }
}

export class Rx24 implements Battle {
    public info() {
        return "Rx24, Pilot Droid";
    }
}
