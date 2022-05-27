function push(array, elem) {
  const new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function add_contact(mailing_list, email) {
  return push(mailing_list, email);
}