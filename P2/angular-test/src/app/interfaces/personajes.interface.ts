
// Interfces usadas en la aplicacion
export interface Personajes {
  _id?: string;
  dateOfDeath?: number,
  dateOfBirth?: number,
  imageLink?: string,
  male?: string;
  house?: string;
  slug?: string;
  name?: string;
  __v?: number;
  pageRank?: number;
  books?: string[];
  updatedAt?: string;
  createdAt?: string;
  titles?: string[];
}

export interface personajeDetalle {
  message?: string;
  data?: Detalle;
}

export interface Detalle {
  _id?: string;
  dateOfBirth: number;
  imageLink?: string;
  male?: boolean;
  culture?: string;
  house?: string;
  slug?: string;
  name?: string;
  __v?: number;
  pageRank?: number;
  hasPath?: boolean;
  books?: string[];
  updatedAt?: string;
  createdAt?: string;
  titles?: string[];
}

