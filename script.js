const countInput = document.querySelector("#count-input");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const passwordText = document.querySelector(".password-text");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{};~?,./";

function generatePassword() {
  let charSet = "";
  let password = "";

  let length = parseInt(countInput.value);
  if (length > 20) {
    countInput.value = 20;
    length = 20;
  } else if (length < 8) {
    countInput.value = 8;
    length = 8;
  }
  charSet += lowercase;
  //   fix uppercase, numbers, symbols logic. Checkboxes don't seem to define 'true' or 'false'
  if (uppercaseInput.checked) {
    charSet += uppercase;
  }
  if (numbersInput.checked) {
    charSet += numbers;
  }
  if (symbolInput.checked) {
    charSet += symbols;
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  passwordText.innerHTML = password;
}
