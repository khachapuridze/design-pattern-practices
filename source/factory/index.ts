import {BmwInterface,Models} from './interface';
export class BmwFactory {

    static create(type:Models) {
        if (type === 'X5') {
            return new Bmw(type, 108000, 300);
        }
        if (type === 'X6') {
            return new Bmw(type, 111000, 320);
        }
    }
}

export class Bmw implements BmwInterface{
    constructor(public model:Models, public price:number, public maxSpeed:number) {
    }
}
