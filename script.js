const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");
const messageErrorEmail = document.getElementById("message-error-email");
const messageErrorPassword = document.getElementById("message-error-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const regexPassword =
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

  if (!regexEmail.test(email.value)) {
    form.classList.add("message-invalid");
    messageErrorEmail.innerHTML =
      "Por favor, colocar um endereço de e-mail válido";
  } else {
    form.classList.remove("message-invalid");
    messageErrorEmail.innerHTML = "";
  }

  if (!regexPassword.test(password.value)) {
    form.classList.add("message-invalid");
    messageErrorPassword.innerHTML = "Senha inválida";
  } else {
    form.classList.remove("message-invalid");
    messageErrorPassword.innerHTML = "";
  }

  form.reset();
});
