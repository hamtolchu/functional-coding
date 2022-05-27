function objectSet(obj, key, value) {
  const new_obj = Object.assign({}, obj);
  new_obj[key] = value;
  return new_obj;
}

function setQuantity(item, new_quantity) {
  return objectSet(item, 'quantity', new_quantity);
}

function setQuantityByName02(cart, name, quantity) {
  const new_cart = cart.slice();
  for (let i = 0; i < new_cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i] = setQuantity(cart[i], quantity);
    }
  }
  return new_cart;
}

