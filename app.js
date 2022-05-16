// alert("it's working")

const form = document.querySelector(".subscribe-to-newsletter");
const email = document.querySelector(".subscribe-to-newsletter #email");
// alert("still works");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("abc");
});

// simple regex: ^(.+)@(.+)$
