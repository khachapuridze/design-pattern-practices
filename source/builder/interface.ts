export interface  IBuild {
    url: string;
    method: string;
    payload: {};
}

export interface IRequesBuilder {
    forUrl: (url: string) => object;
    useMethod: (method: string) => object;
    payload: (payload: object) => object;
    build(): IBuild;
}
