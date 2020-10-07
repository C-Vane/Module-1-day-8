window.addEventListener("DOMContentLoaded", function () {
  //commen variables
  let operation = "";
  let previous_result = 0;
  const result = document.getElementById("result");
  // math operation functions
  const sum = (x, y) => x + y;
  const differece = (x, y) => x - y;
  const moltiplication = (x, y) => x * y;
  const division = (x, y) => x / y;
  const square = (x) => x * x;
  const sq_root = (x) => Math.sqrt(x);
  //saving the pressed numbers
  const numericButtonPressed = (event) => {
    const number_pressed = event.target.value;
    if (result.value === "0") {
      result.value = number_pressed;
    } else result.value += number_pressed;
  };

  //calculator
  const functionButtonPressed = (event) => {
    const key_pressed = event.target.value;

    switch (key_pressed) {
      case "=":
        switch (operation) {
          case "+":
            result.value = sum(previous_result, parseInt(result.value));
            break;
          case "-":
            result.value = differece(previous_result, parseInt(result.value));
            break;
          case "*":
            result.value = moltiplication(previous_result, parseInt(result.value));
            break;
          case "/":
            result.value = division(previous_result, parseInt(result.value));
            break;

          default:
            break;
        }
        break;
      case "x²":
        result.value = square(parseInt(result.value));
        break;

      case "√x":
        result.value = sq_root(parseInt(result.value));
        break;
      case "CE":
        console.log("case is CE");
        result.value = 0;
        previous_result = 0;
        operation = "";
        break;
      case "C":
        result.value = result.value.slice(0, -1);
        break;

      default:
        previous_result = parseInt(result.value);
        operation = key_pressed;
        result.value = "0";
        break;
    }
  };
  //identifying the buttons and adding event listeners
  const numerc_buttons = document.getElementsByClassName("numericButton");
  const function_buttons = document.getElementsByClassName("functionButton");
  for (let button of numerc_buttons) {
    button.addEventListener("click", numericButtonPressed);
  }
  for (let button of function_buttons) {
    button.addEventListener("click", functionButtonPressed);
  }
});
