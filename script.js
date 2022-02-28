document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let number1 = Number(document.querySelectorAll("input")[0].value);
  let operator = document.querySelectorAll("input")[1].value;
  let number2 = Number(document.querySelectorAll("input")[2].value);

  let result;

  // using if...else if... else
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "/") {
    result = number1 / number2;
  } else {
    result = "Invalid Operator";
  }

  document.querySelector("h1").innerHTML = result;
});
