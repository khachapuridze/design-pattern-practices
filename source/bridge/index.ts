import {InkInt, InkType, IPrinter} from "./interface";

class Printer implements IPrinter {
    constructor(public ink: InkInt) { }
}

class EpsonPrinter extends Printer {
    constructor(ink: InkInt) {
        super(ink);
    }

    public print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

class HPprinter extends Printer {
    constructor(ink: InkInt) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

class Ink implements InkInt {
    constructor(public type: InkType) {

     }

    public get() {
        return this.type;
    }
}

class AcrylicInk extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk,
};
