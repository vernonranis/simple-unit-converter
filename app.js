const temp = ["fahrenheit",  "celsius", "kelvin", "rankine", "réaumur", "delisle", "rømer", "newton"];

const inputValue = document.querySelector('.input-field');
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
    case inputID === temp[0] && outputID === temp[1]:
      outputValue.value = ((5/9)*(parseFloat(inputValue.value)-32)).toFixed(2);
      console.log("case 0");
    break;
    
    case inputID === temp[1] && outputID === temp[0]:
      outputValue.value = ((parseFloat(inputValue.value)*(9/5)+32)).toFixed(2);
      console.log("case 1");
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