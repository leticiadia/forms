const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const form = document.querySelector("form");
const messageErrorEmail = document.getElementById("message-error-email");
const messageErrorPassword = document.getElementById("message-error-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  verifyEmail();
  verifyPassword();

  form.reset();
});

const verifyEmail = () => {
  const regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (
    !regexEmail.test(emailElement.value) ||
    email.value == null ||
    email.value == ""
  ) {
    messageErrorEmail.classList.add("message-invalid");
    messageErrorEmail.innerHTML =
      "Por favor, colocar um endereço de e-mail válido";
  } else {
    form.classList.remove("message-invalid");
    messageErrorEmail.innerHTML = "";
  }
}

const verifyPassword = () => {
  const regexPassword =
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

  if (!regexPassword.test(passwordElement.value)) {
    form.classList.add("message-invalid");
    messageErrorPassword.innerHTML = "Senha inválida";
  } else {
    form.classList.remove("message-invalid");
    messageErrorPassword.innerHTML = "";
  }
}


