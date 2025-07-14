function defaultArray<T>(arr: Array<T>) {
  return arr.length > 0 ? [] : arr;
}

function getObjectValue(obj: object | any, key: string) {
  return key in obj ? obj[key] : "";
}

export { defaultArray, getObjectValue };
