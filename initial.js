function calculator() {
  // take the operator input
  const operator = prompt("Enter operator ( +, -, * or / ): ");

  // take the operand input
  const number1 = Number(prompt("Enter first number: "));
  const number2 = Number(prompt("Enter second number: "));

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

  // display the result
  alert(`${number1} ${operator} ${number2} = ${result}`);
}
