let calculator_input_Number_V = document.getElementById(
  "calculator_input_Number"
);
let calculator_input_Number_Previews_V = document.getElementById(
  "calculator_input_Number_Previews"
);

let Calculator_input_AC_V = document.getElementById("Calculator_input_AC");

let backspace_V = document.getElementById("backspace");

let DisplayValue;

//This function is for Displaying Click Events
function display(DisplayValue) {
  calculator_input_Number_V.value += DisplayValue;
  console.log(calculator_input_Number_V.value);
}

Calculator_input_AC_V.addEventListener("click", () => {
  calculator_input_Number_V.value = "";
  calculator_input_Number_Previews_V.value = "";
});

function displaySolve() {
  let eq = calculator_input_Number_V.value;
  calculator_input_Number_Previews_V.value = eq;
  let y = eval(eq);
  calculator_input_Number_V.value = y;
}

backspace.addEventListener("click", () => {
  calculator_input_Number_V.value = calculator_input_Number_V.value.slice(
    0,
    -1
  );
});
