const temp = ["fahrenheit",  "celsius", "kelvin", "rankine", "réaumur", "delisle", "rømer", "newton"];

const inputValue = document.querySelector('.input-field');
const inputValueArray = document.querySelectorAll('.input-option option');
const outputValue = document.querySelector('.output-field');


document.querySelector(".btn").addEventListener("click", () =>{
  const inputType = document.querySelector(".input-option").value;
  const outputType = document.querySelector(".output-option").value;
  
  if (document.querySelector(".input-option option").className === "input"){
    document.querySelector(".input-option").value = outputType;
    document.querySelector(".output-option").value = inputType;
    updateSelectedOption();
    compute();
  }
});

  // const selectedInputID = document.querySelector("#input-selected");
  // console.log(selectedInputID.value);

// for (let index = 0; index < inputValueArray.length; index++) {
//   const element = inputValueArray[index];
//   const selectedInputID = document.querySelector("#input-selected");
//   const selectedOutputID = document.querySelector("#output-selected");
//   // document.querySelectorAll(".input-option option")[index].removeAttribute("disabled", "true");
  
//   if (selectedInputID.value === temp[index]) {
//     document.querySelectorAll(".output-option option")[index].setAttribute("disabled", "true");
//     break
//   }
// }

function updateSelectedOption() {
  const currentInputOption = document.querySelector(".input-option").value;
  const currentOutputOption = document.querySelector(".output-option").value;
  const newInputOption = document.querySelectorAll(".input-option option");
  const newOutputOption = document.querySelectorAll(".output-option option");
  
  for (let index = 0; index < newInputOption.length; index++) {
    document.querySelectorAll(".input-option option")[index].removeAttribute("id");
  }
  
  for (let index = 0; index < newOutputOption.length; index++) {
    document.querySelectorAll(".output-option option")[index].removeAttribute("id");
  }
  
  for (let i = 0; i < newInputOption.length; i++) {
    const newInputOptionLoop = newInputOption[i];
    if (currentInputOption === newInputOptionLoop.value) {
      document.querySelectorAll(".input-option option")[i].setAttribute("id", "input-selected");
      break
    }
  }
  
  for (let i = 0; i < newOutputOption.length; i++) {
    const newOutputOptionLoop = newOutputOption[i];
    if (currentOutputOption === newOutputOptionLoop.value) {
      document.querySelectorAll(".output-option option")[i].setAttribute("id", "output-selected");
      break
    }
  }
  compute();
}

function compute() {
  const inputID = document.querySelector("#input-selected").value;
  const outputID = document.querySelector("#output-selected").value;

  switch (true) {
     // fahrenheit to celsius
    case inputID === temp[0] && outputID === temp[1]:
      outputValue.value = ((5/9)*(parseFloat(inputValue.value)-32)).toFixed(2);
      break;

    // fahrenheit to kelvin
    case inputID === temp[0] && outputID === temp[2]:
      outputValue.value = ((parseFloat(inputValue.value)-32)*(5/9)+273.15).toFixed(2);
    break;

    // fahrenheit to rankine
    case inputID === temp[0] && outputID === temp[3]:
      outputValue.value = (parseFloat(inputValue.value)+459.67).toFixed(2);
    break;

    // fahrenheit to réaumur
    case inputID === temp[0] && outputID === temp[4]:
      outputValue.value = ((parseFloat(inputValue.value)-32)*(4/9)).toFixed(2);
    break;

    // fahrenheit to delisle
    case inputID === temp[0] && outputID === temp[5]:
      outputValue.value = ((212-parseFloat(inputValue.value))*(5/6)).toFixed(2);
    break;

    // fahrenheit to rømer
    case inputID === temp[0] && outputID === temp[6]:
      outputValue.value = ((parseFloat(inputValue.value)-32)*(7/24)+7.5).toFixed(2);
    break;

    // fahrenheit to newton
    case inputID === temp[0] && outputID === temp[7]:
      outputValue.value = ((parseFloat(inputValue.value)-32)*(11/60)).toFixed(2);
    break;

   // celsius to fahrenheit
    case inputID === temp[1] && outputID === temp[0]:
      outputValue.value = ((parseFloat(inputValue.value)*(9/5)+32)).toFixed(2);
    break;

   // celsius to kelvin
    case inputID === temp[1] && outputID === temp[2]:
      outputValue.value = ((parseFloat(inputValue.value)+273.15)).toFixed(2);
    break;

   // celsius to rankine
    case inputID === temp[1] && outputID === temp[3]:
      outputValue.value = ((parseFloat(inputValue.value)+273.15)*(9/5)).toFixed(2);
    break;

   // celsius to réaumur
    case inputID === temp[1] && outputID === temp[4]:
      outputValue.value = ((parseFloat(inputValue.value))*(4/5)).toFixed(2);
    break;

   // celsius to delisle
    case inputID === temp[1] && outputID === temp[5]:
      outputValue.value = ((100-parseFloat(inputValue.value))*(3/2)).toFixed(2);
    break;

   // celsius to rømer
    case inputID === temp[1] && outputID === temp[6]:
      outputValue.value = ((parseFloat(inputValue.value))*(21/40)+7.5).toFixed(2);
    break;

   // celsius to newton
    case inputID === temp[1] && outputID === temp[7]:
      outputValue.value = ((parseFloat(inputValue.value))*(33/100)).toFixed(2);
    break;

  //  kelvin to fahrenheit
    case inputID === temp[2] && outputID === temp[0]:
      outputValue.value = (parseFloat(inputValue.value)*(9/5-459.67)).toFixed(2);
    break;

  //  kelvin to celsius
    case inputID === temp[2] && outputID === temp[1]:
      outputValue.value = (parseFloat(inputValue.value)-(273.15)).toFixed(2);
    break;

  //  kelvin to rankine
    case inputID === temp[2] && outputID === temp[3]:
      outputValue.value = (parseFloat(inputValue.value)*(9/5)).toFixed(2);
    break;

  //  kelvin to réaumur
    case inputID === temp[2] && outputID === temp[4]:
      outputValue.value = (parseFloat(inputValue.value-273.15)*(4/5)).toFixed(2);
    break;

  //  kelvin to delisle
    case inputID === temp[2] && outputID === temp[5]:
      outputValue.value = ((373.15-parseFloat(inputValue.value))*(3/2)).toFixed(2);
    break;

  //  kelvin to rømer
    case inputID === temp[2] && outputID === temp[6]:
      outputValue.value = ((parseFloat(inputValue.value)-273.15)*21/40+7.5).toFixed(2);
    break;

  //  kelvin to newton
    case inputID === temp[2] && outputID === temp[7]:
      outputValue.value = ((parseFloat(inputValue.value)-273.15)*33/100).toFixed(2);
    break;

  //  rankine to fahrenheit
    case inputID === temp[3] && outputID === temp[0]:
      outputValue.value = ((parseFloat(inputValue.value)-459.67)).toFixed(2);
    break;

    default:
      console.log("not working");
      outputValue.value = (" ");
      break;
  }
}
inputValue.addEventListener("input", () =>{
  compute();
});