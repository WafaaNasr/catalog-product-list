import { IBaseState } from './ibase-state';


//#region Array-Functions

export function insertByIndex(state, newItem, insertAt) {
  return [...state.slice(0, insertAt), newItem, ...state.slice(insertAt + 1)];
}
export function removeByIndex(state, index) {
  return state.filter((item, idx) => idx !== index);
}

export function removeByItem(state, obj) {
  return state.filter(item => item !== obj);
}

export function addItem(state, obj) {
  return state.concat(obj);
}

export function getEntitesPerPage<T>(state: Array<T>, pageIndex: number, pageSize: number) {
  if (!arguments) return state;
  const end = (pageIndex + 1) * pageSize;
  const start = pageIndex * pageSize;
  return state.slice(start, end);
}

export function pluck<T>(property: string, state: Array<T>): Array<any> {
  if (!arguments) return state;
  debugger;
  if (state.length > 0) {
    return Array.from(new Set(state.map(item => { if (item.hasOwnProperty(property)) return item[property] })));
  }

}
//#endregion
