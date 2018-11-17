import { IBaseState } from './ibase-state';

//#region IBase-State
export function intializeBeforeLoad<T>(state: IBaseState<T>): IBaseState<T> {
  return Object.assign({}, state, {
    loaded: false,
    loading: true,
    hasError: false,
    error: undefined,
    entities: Array<T>()
  });
}

export function loadEntitiesSuccess<T>(
  state: IBaseState<T>,
  payload
): IBaseState<T> {
  console.log([...payload]);
  return {
    ...state,
    entities: payload.Payloads.reduce(
      (acc, item) => ({
        ...acc,
        [item['id']]: item
      }),
      {}
    ),
    loading: false,
    error: null,
    loaded: true,
    hasError: false
  };
}

export function addOrUpdateEntity(state, payload) {
  const entities = {
    ...state.entities,
    [payload.id]: payload
  };

  return Object.assign({}, state, {
    entities: entities,
    loading: false,
    error: undefined,
    loaded: true,
    hasError: false
  });
}

export function addOrUpdateUnNormEntity(state, payload) {
  let index;
  let newEntities;

  if (state.entities && state.entities.length > 0)
    index = state.entities.findIndex(item => item.tailNo === payload.tailNo);

  if (index >= 0) {
    newEntities = insertByIndex(state.entities, payload, index);
  } else {
    newEntities = [...state.entities, payload];
  }
  return {
    ...state,
    entities: newEntities,
    loading: false,
    error: undefined,
    loaded: true,
    hasError: false
  };
}

export function removeEntity(state, payload) {
  const { [payload.id]: removed, ...entities } = state.entities;
  return {
    ...state,
    entities,
    loading: false,
    error: null,
    loaded: true,
    hasError: false
  };
}

export function returnError(state, payload) {
  return Object.assign({}, state, {
    loaded: true,
    loading: false,
    hasError: true,
    entities: [],
    error: payload
  });
}
//#endregion

//#region Array-Functions

function insertByIndex(state, newItem, insertAt) {
  return [...state.slice(0, insertAt), newItem, ...state.slice(insertAt + 1)];
}
function removeByIndex(state, index) {
  return state.filter((item, idx) => idx !== index);
}

function removeByItem(state, obj) {
  return state.filter(item => item !== obj);
}

function addItem(state, obj) {
  return state.concat(obj);
}

//#endregion
