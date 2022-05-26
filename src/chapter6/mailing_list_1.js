let mailing_list = [];

function add_contact(list, email) {
  const new_array = list.slice();
  new_array.push(email);
  return new_array;
}

function submit_form_handler(event) {
  const form = event.target;
  const email = form.elements["email"].value;
  mailing_list = add_contact(email);
}