const inputValue = document.querySelector('.input-field');

document.querySelector(".btn").addEventListener("click", () =>{
  const inputType = document.querySelector(".input-option").value;
  const outputType = document.querySelector(".output-option").value;

  if (document.querySelector(".input-option option").className === "input"){
    document.querySelector(".input-option").value = outputType;
    document.querySelector(".output-option").value = inputType;
    updateSelectedOption();
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
}
