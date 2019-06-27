import {ISheep} from './interface';

export class Sheep implements ISheep {

    constructor(public name:string, public weight:number) {
    }

    clone(): Sheep {
        return new Sheep(this.name, this.weight);
    }
}
