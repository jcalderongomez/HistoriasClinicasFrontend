export interface IDataEspecialidad {
    isExitoso: boolean;
    resultado: Especialidad[];
    mensaje:   string;
}

export interface Especialidad {
    id:                 number;
    nombreEspecialidad: string;
    descripcion:        string;
    estado:             boolean;
}
