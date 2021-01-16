// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const loginForm = document.getElementById("insert-login");
const loginLogoutButton = document.getElementById("#login-logout");
const registerForm = document.getElementById("insert-register");
var registerUn = document.getElementById("register-email");
var registerPw = document.getElementById("register-pword");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
//setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
var loggedIn = false;

var unArray = [
  "markwalt@gmail.com",
  "jongossy@gmail.com",
  "lisacain@gmail.com",
  "jenndemp@gmail.com",
];
var pwArray = ["mark1234", "flomaygo", "lisa1234", "jenny1234"];
var fnArray = ["Mark Walters", "Jonathan Goss", "Lisa Cain", "Jenny Dempsey"];

// validate login

function validate() {
  var un = document.getElementById("login-email").value;
  var pw = document.getElementById("login-pword").value;
  var valid = false;

  for (var i = 0; i < unArray.length; i++) {
    if (un == unArray[i] && pw == pwArray[i]) {
      valid = true;
      break;
    }
  }

  if (valid) {
    alert("Успешно влязохте в профила си.");
    loggedIn = true;
  } else {
    alert(
      "Грешно име и/или парола! Моля опитайте отново. Потребителят и паролата трябва да са верни за да влезете като потребител."
    );
    document.getElementById("pword").value = "";
    document.getElementById("email").value = "";
    document.getElementById("email").focus();
  }
  //Премахване на формата за вход при успешно влизане и променяне на бутона вход на изход

  if (loggedIn) {
    loginLogoutButton.innerHTML = "Изход";
    loginForm.classList.add("hide-login");
    registerForm.classList.add("hide-register");
  }
}
var unField = document.getElementById("login-email");
var pwField = document.getElementById("login-pword");

//logout
loginLogoutButton.addEventListener("click", () => {
  if ((loginLogoutButton.innerHTML = "Изход")) {
    loginForm.classList.remove("hide-login");
    registerForm.classList.remove("hide-register");
    unField.value = "";
    pwField.value = "";
  }
});

//регистрация

function register() {
  registerUn.addEventListener("click", () => {
    console.log("test");
  });
  registerPw.addEventListener("click", () => {
    console.log("test");
  });
}
