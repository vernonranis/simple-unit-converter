document.querySelector(".btn").addEventListener("click", () =>{
  const inputType = document.querySelector(".input-option").value;
  const outputType = document.querySelector(".output-option").value;
  if (document.querySelector(".input-option option").className === "input"){
    document.querySelector(".input-option").value = outputType;
    document.querySelector(".output-option").value = inputType;
    // console.log("input: " + inputType);
    // console.log("output: " + outputType);
  }
});