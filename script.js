const button = document.querySelector("#buttonTogglePasswordVisbility");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const body = document.querySelector("body");

const equalCheckLine = document.querySelector("#passwordsEqual");
const lowerCheckLine = document.querySelector("#lowerCaseLetters");
const upperCheckLine = document.querySelector("#upperCaseLetters");
const numberCheckLine = document.querySelector("#containsNumbers");
const lengthCheckLine = document.querySelector("#atLeast10Chars");

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
  if (passwordsAreEqual(input1, input2)) {
    setCheckStatus(equalCheckLine, true);
    setCheckStatus(lowerCheckLine, hasLowerCaseLetters(input1));
    setCheckStatus(upperCheckLine, hasUpperCaseLetters(input1));
    setCheckStatus(numberCheckLine, containsNumbers(input1));
    setCheckStatus(lengthCheckLine, hasAtLeast10Characters(input1));
  } else {
    setCheckStatus(equalCheckLine, false);
    setCheckStatus(lowerCheckLine, false);
    setCheckStatus(upperCheckLine, false);
    setCheckStatus(numberCheckLine, false);
    setCheckStatus(lengthCheckLine, false);
  }
});

//sets wrong- or correct-class accordingly to result of checks
function setCheckStatus(checkLine, checkValid) {
  if (checkValid) {
    checkLine.classList.replace("check--wrong", "check--correct");
  } else {
    checkLine.classList.replace("check--correct", "check--wrong");
  }
}

//check if passwords are equal
const passwordsAreEqual = (input1, input2) => input1.value === input2.value;

//check if password has lowerCaseLetters
const hasLowerCaseLetters = (input1) =>
  input1.value.toUpperCase() !== input1.value;

//check if password has upperCaseLetters
const hasUpperCaseLetters = (input1) =>
  input1.value.toLowerCase() !== input1.value;

//check if password contains Numbers
const containsNumbers = (input1) => /\d/.test(input1.value);

//check if password has at least 10 characters
const hasAtLeast10Characters = (input1) => input1.value.length >= 10;
