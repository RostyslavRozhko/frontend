export function normalizeObject(array, field) {
  return array.reduce((accum, object) => ({
    ...accum,
    [object[field]]: {
      ...omit(object, [field])
    }
  }), {})
}

export function omit(obj, fields) {
  const shallowCopy = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}