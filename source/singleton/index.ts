import {Instance} from './interface';

export class Person {
    static instance: Instance;
    constructor() {
        if (typeof Person.instance === 'object') {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}
