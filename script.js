const signupContainer = document.getElementById("signup-form-container");
const successMessage = document.getElementById("success-message");
const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const confirmedEmail = document.getElementById("confirmed-email");
const dismissBtn = document.getElementById("dismiss-btn");

const commonEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "live.com",
];

function validateEmailRegex(email) {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validEmail(email) {
  if (!email) return false;

  const [, domain] = email.split("@");

  return (
    validator.isEmail(email) &&
    commonEmailDomains.includes(domain) &&
    validateEmailRegex(email)
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const email = emailInput.value;

  if (!validEmail(email)) {
    emailError.hidden = false;
    emailInput.classList.add("error-email");
    return;
  }

  confirmedEmail.textContent = email;
  form.reset();
  emailError.hidden = true;
  emailInput.classList.remove("error-email");
  signupContainer.style.display = "none";
  successMessage.style.display = "flex";
}

function dismissButton() {
  signupContainer.style.display = "grid";
  successMessage.style.display = "none";
}

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", dismissButton);
