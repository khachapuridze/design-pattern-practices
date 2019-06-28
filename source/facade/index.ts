import {IDiscount, IShipping, IFacade, IFees} from "./interface";

class ShopFacade implements IFacade {
    constructor(public discount = new Discount(), public fees = new Fees(), public shipping = new Shipping()) {
    }

    calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount implements IDiscount {

    calc(value: number) {
        return value * 0.9;
    }
}

class Shipping implements IShipping{
    calc() {
        return 5;
    }
}

class Fees implements IFees{

    calc(value: number) {
        return value * 1.05;
    }
}

export default ShopFacade;