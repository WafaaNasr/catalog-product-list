
export interface IBaseState<T> {
  loaded: boolean;
  loading: boolean;
  hasError: boolean;
  error: any;
  entities: Array<T> | T;
  normalizedEntities?: { [id: number]: T };
}

