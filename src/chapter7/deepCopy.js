function deepCopy(thing) {
  if (thing === null) {
    return null;
  } else if (Array.isArray(thing)) {
    const copy = [];
    for (let i = 0; i < thing.length; i += 1) {
      copy.push(deepCopy(thing[i]));
    }
    return copy;
  } else if (typeof thing === "object") {
    const copy = {};
    const keys = Object.keys(thing);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = thing[key];
      copy[key] = deepCopy(value);
    }
    return copy;
  } else {
    return thing;
  }
}