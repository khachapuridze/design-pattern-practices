export interface ISheep {
    name: string;
    weight: number;
}

export interface IPrototype {
    clone: () => ISheep;
}
