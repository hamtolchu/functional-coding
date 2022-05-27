/*
  연습문제 1
  - 아래 코드를 copy-on-write 형식으로 변경
 */
let mailing_list = [];

function add_contact(list, email) {
  const new_list = list.slice();
  new_list.push(email);
  return new_list;
}

function submit_form_handler(event) {
  const form = event.target;
  const email = form.elements["email"].value;
  mailing_list = add_contact(mailing_list, email);
}