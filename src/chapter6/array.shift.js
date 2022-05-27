function first_element(array) {
  return array[0];
}

function drop_first(array) {
  const new_array = array.slice();
  new_array.shift();
  return new_array;
}

function shift(array) {
  return {
    first: first_element(array),
    array: drop_first(array)
  };
}
