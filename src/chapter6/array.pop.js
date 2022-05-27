function last_element(array) {
  return array[array.length - 1];
}

function drop_last(array) {
  const new_array = array.slice();
  new_array.pop();
  return new_array;
}

function pop(array) {
  return {
    last: last_element(array),
    array: drop_last(array)
  };
}