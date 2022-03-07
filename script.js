const button = document.querySelector("#buttonTogglePasswordVisbility");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const inputs = document.querySelectorAll("input");

//Show Password <-> Hide Password
button.addEventListener("click", () => {
  if (input1.type === "password" && input2.type === "password") {
    input1.type = "text";
    input2.type = "text";
    button.innerText = "Show Password";
  } else {
    input1.type = "password";
    input2.type = "password";
    button.innerText = "Hide Password";
  }
});

//eventListener for the input-fields -> uses checking functions
inputs.addEventListener("input", () => {
  passwordsAreEqual(input1, input2);
});

//check if passwords are equal
function passwordsAreEqual(input1, input2) {
  if (input1.value === input2.value) {
    document.querySelector("#passwordsEqual").innerText =
      "Passwords are equal ✅";
    return true;
  } else {
    document.querySelector("#passwordsEqual").innerText =
      "Passwords are equal ❌";
  }
}

//check if passwords have lowerCaseLetters
function hasLowerCaseLetters() {}

function hasUpperCaseLetters() {}

function containsNumbers() {}

function hasAtLeast10Characters() {}
