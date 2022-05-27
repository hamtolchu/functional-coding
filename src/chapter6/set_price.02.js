function objectSet(obj, key, value) {
  const new_obj = Object.assign({}, obj);
  new_obj[key] = value;
  return new_obj;
}

function set_price(item, new_price) {
  return objectSet(item, 'price', new_price);
}