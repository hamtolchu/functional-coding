function objectDelete(obj, key) {
  const new_obj = Object.assign({}, obj);
  delete new_obj[key];
  return new_obj;
}