const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const cPasswordInput = document.getElementById("cPassword");
const submit = document.getElementById("submit");
const iconsWrong = document.querySelectorAll(".icon-wrong");
const iconsSuccess = document.querySelectorAll(".icon-success");
const toastyElem = document.getElementById("toasty");

let errorStack = [];

function successInput(elem, i) {
  elem.classList.add("success-input");
  elem.classList.remove("wrong-input");
  hiddenSmallMsg(elem, i);
}

function wrongInput(elem, msg, i) {
  elem.classList.add("wrong-input");
  elem.classList.remove("success-input");
  displaySmallMsg(elem, msg, i);
}

function displaySmallMsg(elem, msg, i) {
  const element = elem.parentElement.children[4];
  element.innerText = msg;
  element.style.visibility = "visible";
  element.classList.add("small-wrong");
  iconsWrong[i].classList.add("v-wrong-icon");
  iconsSuccess[i].classList.remove("v-success-icon");
}

function hiddenSmallMsg(elem, i) {
  const element = elem.parentElement.children[4];
  element.innerText = "";
  element.style.visibility = "hidden";
  iconsWrong[i].classList.remove("v-wrong-icon");
  iconsSuccess[i].classList.add("v-success-icon");
}

function usernameFun() {
  const username = usernameInput.value;
  if (username.length > 6) {
    // display UI errors
    successInput(usernameInput, 0);
  } else {
    errorStack.push({
      state: true,
      msg: "username is correct",
    });
    wrongInput(usernameInput, "username is correct", 0);
  }
}

function emailFun() {
  const email = emailInput.value;
  const pattern = /[a-zA-Z]{6,8}[1-9]{2,4}@gmail.com/;
  const result = pattern.test(email);

  if (email.length && result) {
    // display UI errors
    successInput(emailInput, 1);
  } else {
    errorStack.push({
      state: true,
      msg: "email is correct",
    });
    wrongInput(emailInput, "email not valid", 1);
  }
}

function password() {
  const password = passwordInput.value;
  const pattern = /[a-zA-z1-9]{8,16}/;
  const result = pattern.test(password);
  if (result) {
    // display UI errors
    successInput(passwordInput, 2);
  } else {
    errorStack.push({
      state: true,
      msg: "password is correct",
    });
    wrongInput(passwordInput, "password not valid", 2);
  }
}

function cPassword() {
  const cPassword = cPasswordInput.value;
  if (cPassword === passwordInput.value) {
    // display UI errors
    successInput(cPasswordInput, 3);
  } else {
    errorStack.push({
      state: true,
      msg: "confirm password is correct",
    });
    wrongInput(cPasswordInput, "confirm password is correct", 3);
  }
}

function isValid() {
  usernameFun();
  emailFun();
  password();
  cPassword();
  if (errorStack.length > 0) {
    toastyElem.classList.add("active-toasty");
    toastyElem.innerText = "🦄 " + errorStack[0].msg;
    setTimeout(() => {
      toastyElem.classList.remove("active-toasty");
      // toastyElem.classList.add("close-toasty");
    }, 2000);
    errorStack = [];
  } else {
    toastyElem.classList.remove("active-toasty");
  }
}

submit.addEventListener("click", () => {
  isValid();
});

window.addEventListener("DOMContentLoaded", () => {
  usernameInput.focus();
});
