const form = document.querySelector('.login-form');
form.addEventListener('submit', alternativeSubmit);
function alternativeSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const pass = form.elements.password.value;
  const formResult = {};
  if (email.trim() == '' || pass.trim() == '') {
    alert('All form fields must be filled in');
  } else {
    formResult[form.elements.email.name] = email.trim();
    formResult[form.elements.password.name] = pass.trim();
    console.log(formResult);
    form.reset();
  }
}
