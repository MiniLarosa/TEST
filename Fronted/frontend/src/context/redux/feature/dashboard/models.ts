export interface InitialState {
    dashboard: {
        isLoading: boolean;
        users: UserData[] | null;
        projects: Projects[] | null;
        tasks: Tasks[] | null;
    }
}

export interface UserData  {
    id: number;
    nombre:string;
    correo: string;
    contrasena:string;
}

export interface GETUsersData {
    data: UserData[]
}

export interface Projects {
    id: number;
    titulo:string;
    descripcion: string;
}

export interface GET_Projects {
    data: Projects[]
}

export interface POST_ProjectsProps {
    titulo:string;
    descripcion: string;
}

export interface Tasks {
    id: number;
    TituloTarea:string;
    DescripcionTarea: string;
    Estado: number;
    FechaInicioTarea: string;
    FechaFinTarea: string;
}

export interface GET_Tasks {
    data: Tasks[]
}

export interface POST_TasksProps {
    TituloTarea:string;
    DescripcionTarea: string;
    FechaInicioTarea: string;
    FechaFinTarea: string;
}