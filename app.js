// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const loginForm = document.getElementById("insert-login");
const loginLogoutButton = document.getElementById("#login-logout");
const registerForm = document.getElementById("insert-register");
const registerUn = document.getElementById("register-email");
const registerPw = document.getElementById("register-pword");
const loggedInInfo = document.getElementById("logged-in-info");
const galleryImage = document.getElementById("gallery-img");
const showImages = document.getElementById("show-gallery");
const allImages = document.getElementById("all-images");

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

// validate login

function validate() {
  var unArray = [
    "markwalt@gmail.com",
    "jongossy@gmail.com",
    "lisacain@gmail.com",
    "jenndemp@gmail.com",
  ];
  var pwArray = ["mark1234", "flomaygo", "lisa1234", "jenny1234"];
  var fnArray = ["Mark Walters", "Jonathan Goss", "Lisa Cain", "Jenny Dempsey"];
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
    loggedInInfo.classList.remove("hide-logged-in-info");
  }
}
var unField = document.getElementById("login-email");
var pwField = document.getElementById("login-pword");

//logout
loginLogoutButton.addEventListener("click", () => {
  if ((loginLogoutButton.innerHTML = "Изход")) {
    loginForm.classList.remove("hide-login");
    loggedInInfo.classList.add("hide-logged-in-info");
    loginLogoutButton.innerHTML = "Вход";
    unField.value = "";
    pwField.value = "";
  }
});

//slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//gallery

function test() {
  showImages.addEventListener("click", () => {
    allImages.classList.toggle("hide-gallery");
  });
}
