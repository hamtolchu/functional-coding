/*
  연습문제 1
  - 아래 코드를 copy-on-write 형식으로 변경
 */
let mailing_list = [];

function add_contact(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  add_contact(email);
}