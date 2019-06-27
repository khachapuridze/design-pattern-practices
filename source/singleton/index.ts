import {Instance} from "./interface";

export class Person {
    public static instance: Instance;
    constructor() {
        // TODO: improve condition - do we have it or not
        if (Person.instance) {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}
