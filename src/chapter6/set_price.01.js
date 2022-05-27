function set_price(item, new_price) {
  const new_item = Object.assign({}, item);
  new_item.price = new_price;
  return new_item;
}