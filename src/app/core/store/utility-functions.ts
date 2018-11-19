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
  if (state.length > 0) {
    return Array.from(new Set(state.map(item => { if (item.hasOwnProperty(property)) return item[property] })));
  }
}

export function filter<T>(state: Array<T>, prop: string, valuesToCompare: Array<string>) {
  if (valuesToCompare.hasOwnProperty(prop) && valuesToCompare[prop] && valuesToCompare[prop].length > 0)
    return [...state.filter(item => { return valuesToCompare[prop].some(data => data === item[prop]) })];
  return state;
}
export function dynamicSort(property:string) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}
//#endregion
