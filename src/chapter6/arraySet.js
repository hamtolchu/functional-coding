function arraySet(array, idx, value) {
  const new_array = array.slice();
  new_array[idx] = value;
  return new_array;
}