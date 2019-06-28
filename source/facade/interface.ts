export interface IDiscount {
    calc(value: number): number;
}

export interface IShipping {
    calc(): number;
}

export interface IFees {
    calc(value: number): number;
}

export interface IFacade {
    discount: IDiscount;
    shipping: IShipping;
    fees: IFees;
}
