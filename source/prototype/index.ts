import {IPrototype, ISheep} from "./interface";

export class Sheep implements ISheep, IPrototype {

    constructor(public name: string, public weight: number) {
    }

    public clone(): Sheep {
        return new Sheep(this.name, this.weight);
    }
}
