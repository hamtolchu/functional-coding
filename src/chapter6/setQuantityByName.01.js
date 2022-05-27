function setQuantityByName01(cart, name, quantity) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i].quantity = quantity;
    }
  }
}
