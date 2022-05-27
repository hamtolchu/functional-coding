function objectSet(obj, key, value) {
  const new_obj = Object.assign({}, obj);
  new_obj[key] = value;
  return new_obj;
}

function setQuantity(item, new_quantity) {
  return objectSet(item, 'quantity', new_quantity);
}