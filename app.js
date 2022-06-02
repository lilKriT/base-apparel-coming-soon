const form = document.querySelector(".subscribe-to-newsletter");
const emailField = document.querySelector(".subscribe-to-newsletter #email");

let simpleEmailRegex = /^(.+)@(.+)$/;
let complexEmailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  if (!validateInput()) {
    e.preventDefault();
  }
});

function validateInput() {
  let formValid = true;
  let email = emailField.value.trim();

  if (!isValidEmail(email, complexEmailRegex)) {
    formValid = false;
    emailField.parentElement.classList.add("invalid");
  } else {
    emailField.parentElement.classList.remove("invalid");
  }

  if (!formValid) {
    return false;
  }

  return true;
}

function isValidEmail(email, regex) {
  return String(email).toLowerCase().match(regex);
}
