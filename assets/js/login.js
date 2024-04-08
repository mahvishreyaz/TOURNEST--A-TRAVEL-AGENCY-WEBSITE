// Call all inputs
const firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  submit = document.querySelector("input[type='submit']"),
  // The list of input fields
  fields = document.querySelectorAll("input:not([type='submit'])");
let check = 0;

// Declare the RegEx patterns
const namePattern = /^[a-zA-Z]{1,}$/,
  emailPattern = /\w+@\w+\.\w+/;

// Check fields function
let checkFields = () => {
    if (!namePattern.test(firstName.value)) {
      activateInvalidMode(firstName);
      check++;
    } else removeInvalidMode(firstName);
    if (!namePattern.test(lastName.value)) {
      activateInvalidMode(lastName);
      check++;
    } else removeInvalidMode(lastName);
    if (!emailPattern.test(email.value)) {
      activateInvalidMode(email);
      check++;
    } else removeInvalidMode(email);
    if (password.value.length < 8) {
      activateInvalidMode(password);
      check++;
    } else removeInvalidMode(password);
    if (check != 0) submit.setAttribute("disabled", true);
    else submit.removeAttribute("disabled");
    check = 0;
  };

// Invalid mode function
function activateInvalidMode(field) {
  field.classList.add("invalid-mode");
  field.nextElementSibling.classList.add("active");
}

// Remove invalid mode function
function removeInvalidMode(field) {
  field.classList.remove("invalid-mode");
  field.nextElementSibling.classList.remove("active");
}

// Do the check when we click on submit input
submit.addEventListener("click", checkFields);

// Remove invalid message when we focus on field
fields.forEach((element) => {
  element.addEventListener("focus", () => removeInvalidMode(element));
});
