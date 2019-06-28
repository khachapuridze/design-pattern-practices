export interface IcolorFactory {
    name: string;
    create(): string;
}

export type colorType = {
    name: string;
}

export interface IColor {
    [color: string]: colorType;
}