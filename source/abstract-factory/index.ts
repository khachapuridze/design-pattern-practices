import {KindType,Battle} from './interface';

export function droidProducer(kind:KindType) {
    if (kind === 'battle'){
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

export class B1 implements Battle{
    info() {
        return "B1, Battle Droid";
    }
}

export class Rx24  implements Battle{
    info() {
        return "Rx24, Pilot Droid";
    }
}
