const form = document.querySelector(".subscribe-to-newsletter");
const email = document.querySelector(".subscribe-to-newsletter #email");

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
  let emailValue = email.value.trim();

  if (!isValidEmail(emailValue, complexEmailRegex)) {
    formValid = false;
  } else {
    
  }

  if (!formValid) {
    return false;
  }

  return true;
}

function isValidEmail(email, regex) {
  return String(email).toLowerCase().match(regex);
}
