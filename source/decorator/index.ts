import {IPasta} from "./interface";

class Pasta implements IPasta {
    price: number;
    constructor() {
        this.price = 0;
    }
    getPrice() {
        return this.price;
    }
}

class Penne extends Pasta {
    constructor() {
        super();
        this.price = 8;
    }
}

class PastaDecorator extends Pasta {
    constructor(public pasta: IPasta) {
        super();
    }

    getPrice() {
        return this.pasta.getPrice();
    }
}

class SauceDecorator extends PastaDecorator {
    constructor(public pasta: IPasta) {
        super(pasta);
    }

    getPrice() {
        return super.getPrice() + 5;
    }
}

class CheeseDecorator extends PastaDecorator {
    constructor(public pasta: IPasta) {
        super(pasta);
    }

    getPrice() {
        return super.getPrice() + 3;
    }
}

export {
    Penne,
    SauceDecorator,
    CheeseDecorator
};
