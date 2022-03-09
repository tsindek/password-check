const button = document.querySelector("#buttonTogglePasswordVisbility");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const body = document.querySelector("body");

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
body.addEventListener("input", () => {
  passwordsAreEqual(input1, input2);
  hasLowerCaseLetters(input1);
  hasUpperCaseLetters(input1);
  containsNumbers(input1);
  hasAtLeast10Characters(input1);
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

//check if password has lowerCaseLetters
function hasLowerCaseLetters(input1) {
  if (input1.value.toUpperCase() !== input1.value) {
    document.querySelector("#lowerCaseLetters").innerText =
      "Lower Case Letters ✅";
  } else {
    document.querySelector("#lowerCaseLetters").innerText =
      "Lower Case Letters ❌";
  }
}

//check if password has upperCaseLetters
function hasUpperCaseLetters(input1) {
  if (input1.value.toLowerCase() !== input1.value) {
    document.querySelector("#upperCaseLetters").innerText =
      "Upper Case Letters ✅";
  } else {
    document.querySelector("#upperCaseLetters").innerText =
      "Upper Case Letters ❌";
  }
}

//check if password contains Numbers
function containsNumbers(input1) {
  if (/\d/.test(input1.value)) {
    document.querySelector("#containsNumbers").innerText = "Contains Numbers✅";
  } else {
    document.querySelector("#containsNumbers").innerText = "Contains Numbers❌";
  }
}

function hasAtLeast10Characters(input1) {
  if (input1.value.length >= 10) {
    document.querySelector("#atLeast10Chars").innerText =
      "At least 10 characters long ✅";
  } else {
    document.querySelector("#atLeast10Chars").innerText =
      "At least 10 characters long ❌";
  }
}
