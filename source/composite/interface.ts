export interface IEquipment {
    price: number;
    name: string;
    getName(): string;
    getPrice(): number;
    setName(name:string): void;
}
