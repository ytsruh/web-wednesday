var form = document.querySelector("form");
var nameInput = document.querySelector("#name");
var nameFeedback = document.querySelector("#nameFeedback");
var emailInput = document.querySelector("#email");
var emailFeedback = document.querySelector("#emailFeedback");
var submitButton = document.querySelector("#submitButton");

var nameOk = false;
var emailOk = false;

nameInput.addEventListener("input", function (event) {
  var value = event.target.value;
  if (value.length < 3) {
    nameFeedback.textContent = "Name must be at least 3 characters long";
  } else {
    nameFeedback.textContent = "";
    nameOk = true;
  }
});

var invalidEmails = ["example.com", "test.com", "example.org", "gmail.com"];

emailInput.addEventListener("input", function (event) {
  var value = event.target.value.toLowerCase();
  var domain = value.split("@")[1];
  if (invalidEmails.includes(domain)) {
    emailFeedback.textContent = "This email domain is not allowed";
  } else {
    emailFeedback.textContent = "";
    emailOk = true;
  }
});

form.addEventListener("change", function (event) {
  if (nameOk && emailOk) {
    submitButton.classList.remove("hidden");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (nameOk && emailOk) {
    alert("Form submitted");
  }
});
