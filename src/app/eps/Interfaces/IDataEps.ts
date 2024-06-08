export interface IDataEps {
    isExitoso: boolean;
    resultado: Eps[];
    mensaje:   string;
}

export interface Eps {
    id?: number;
  nombreEPS?: string;
  estado?: number;
}
