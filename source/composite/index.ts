import {IEquipment} from "./interface";
class Equipment {
    price: number;
    name: string;

    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

// --- composite ---
class Composite extends Equipment {
    equipments: IEquipment[];

    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment: any) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments.map(equipment => {
            return equipment.getPrice();
        }).reduce((a, b) => {
            return a + b;
        });
    }
}

class Cabinet extends Composite {
    constructor() {
        super();
        this.setName('cabinet');
    }
}

// --- leafs ---
class FloppyDisk extends Equipment {
    constructor() {
        super();
        this.setName('Floppy Disk');
        this.price = 70;
    }
}

class HardDrive extends Equipment {
    constructor() {
        super();
        this.setName('Hard Drive');
        this.price = 250;
    }
}

class Memory extends Equipment {
    constructor() {
        super();
        this.setName('Memory');
        this.price = 280;
    }
}

export {
    Cabinet,
    FloppyDisk,
    HardDrive,
    Memory
};