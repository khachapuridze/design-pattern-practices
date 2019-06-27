export interface ISoldier {
    level: number;
    attack(): number;
}
export interface IJedi {
    level: number;
    attackWithSaber(): number;
}

export interface IJediAdapter {
    jedi: IJedi;
    attack(): number;
}
