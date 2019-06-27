export type InkType = "acrylic-based" | "alcohol-based";

export interface InkInt {
    type: InkType;
    get(): InkType;
}

export interface IPrinter {
    ink: InkInt;
}
