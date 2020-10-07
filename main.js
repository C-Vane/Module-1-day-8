window.addEventListener("DOMContentLoaded", function () {
  //commen variables
  let operation = "";
  let previous_result = 0;
  const result = document.getElementById("result");
  let oper_history = document.getElementById("operations");
  
  
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
    oper_history.innerHTML+=number_pressed;
    if (result.value === "0") {
      result.value = number_pressed;
    } else result.value += number_pressed;
  };

  //calculator
  const functionButtonPressed = (event) => {
    const key_pressed = event.target.value;
    oper_history.innerHTML+=key_pressed;
    switch (key_pressed) {
    
      case "=":
        switch (operation) {
          case "+":
            result.value = sum(previous_result, parseFloat(result.value)).toFixed(2);
            break;
          case "-":
            result.value = differece(previous_result, parseFloat(result.value)).toFixed(2);
            break;
          case "*":
            result.value = moltiplication(previous_result, parseFloat(result.value)).toFixed(2);
            break;
          case "/":
            result.value = division(previous_result, parseFloat(result.value)).toFixed(2);
            break;

          default:
            break;
        }
        break;
      case "x²":
        result.value = square(parseFloat(result.value)).toFixed(2);
        break;

      case "√x":
        result.value = sq_root(parseFloat(result.value)).toFixed(2);
        break;
      case "CE":
        console.log("case is CE");
        result.value = 0;
        previous_result = 0;
        operation = "";
        oper_history.innerHTML= "";
        break;
      case "C":
        result.value = result.value.slice(0, -1);
        oper_history.innerHTML= oper_history.innerHTML.slice(0, -1);
        break;

      default:
        previous_result = parseFloat(result.value);
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
