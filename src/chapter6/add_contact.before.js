function add_contact(mailing_list, email) {
  const list_copy = mailing_list.slice();
  list_copy.push(email);
  return list_copy;
}