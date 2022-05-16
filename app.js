const form = document.querySelector(".subscribe-to-newsletter");
const email = document.querySelector(".subscribe-to-newsletter #email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

function validateInput() {
  let emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    alert("Invalid email");
  } else {
    alert("email goooood");
    form.submit();
  }
}

function isValidEmail(email) {
  let simpleRegex = /^(.+)@(.+)$/;
  let complexRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return String(email).toLowerCase().match(complexRegex);
}

// simple regex: /^(.+)@(.+)$/
// complex regex: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
