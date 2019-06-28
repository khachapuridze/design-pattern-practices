import {Iproxy} from "./interface";

class Car {
    drive() {
        return "driving";
    };
}

class CarProxy {
    constructor( public driver: Iproxy) {
    }
    drive() {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

class Driver {
    constructor(public age: number) {
    }
}

export {
    Car,
    CarProxy,
    Driver
};