function objectSet(obj, key, value) {
  const new_obj = Object.assign({}, obj);
  new_obj[key] = value;
  return new_obj;
}