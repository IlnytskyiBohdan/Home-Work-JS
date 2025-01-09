"use strict";

const form = document.querySelector("form");

const fields = [
  { input: "#exampleFormControlInput1", regex: /[a-zа-я]/i, error: ".error-name", message: "обов'язкове текстове поле" },
  {
    input: "#exampleFormControlTextarea1",
    regex: /.{5,}/,
    error: ".error-massages",
    message: "текстове поле не менше 5 символів",
  },
  {
    input: "#exampleFormControlInput2",
    regex: /\+380\d{9}/,
    error: ".error-phone",
    message: "обов'язкове поле типу phone. З початком на +380",
  },
  {
    input: "#exampleFormControlInput3",
    regex: /@.+\./,
    error: ".error-email",
    message: "email обов'язково повинен мати @ та крапку",
  },
].map(({ input, regex, error, message }) => ({
  input: document.querySelector(input),
  regex,
  errorElement: document.querySelector(error),
  errorMessage: message,
}));

const checkField = ({ input, regex, errorElement, errorMessage }) => {
  const isValid = regex.test(input.value);
  errorElement.style.display = isValid ? "none" : "block";
  if (!isValid) errorElement.textContent = errorMessage;
  return isValid;
};

fields.forEach((field) => field.input.addEventListener("input", () => checkField(field)));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isFormValid = fields.every(checkField);

  if (isFormValid) {
    console.log(Object.fromEntries(new FormData(form).entries()));
  } else {
    console.log("Validation failed");
  }
});
