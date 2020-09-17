/**
 * Deep clones a JavaScript value.
 * @param value The value to clone.
 */
const clone = <T>(value: T): T =>  {
  return innerClone(value) as T;
}

const innerClone = (value: any): any => {
  if (typeof value === "object") {
    // Null is an object, so we need to explictly catch this
    if (value === null) {
      return null;
    }
    if (Array.isArray(value)) {
      return value.map(innerClone);
    }
    if (value instanceof Date) {
      return new Date(value);
    }
    const keys = Object.keys(value);
    const newValue: Record<string, any> = {};
    for(const key of keys) {
      newValue[key] = innerClone(value[key]);
    }
    return newValue;
  }
  return value;
}

export default clone;
