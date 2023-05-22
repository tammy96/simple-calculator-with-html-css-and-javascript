//selecting elements

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const allClearButton = document.querySelector(".clear");
const inputDisplay = document.querySelector(".input-display");
const outputDisplay = document.querySelector(".output-display");

  
numberButtons.forEach(function(number){
    number.addEventListener("click", function () {
      inputDisplay.textContent = inputDisplay.textContent + number.dataset.digit;
    });
  });
  
  //appending operators to display screen

operationButtons.forEach(function(operator){
    operator.addEventListener("click", function () {
      inputDisplay.textContent =
        inputDisplay.textContent + operator.dataset.operator;
    });
  });


 // All clear functionality

function clearAll() {
    inputDisplay.textContent = " ";
    outputDisplay.textContent = " ";
  }
  
  allClearButton.addEventListener("click", clearAll);

// Equals to functionality
function calculate() {
  outputDisplay.textContent = eval(inputDisplay.textContent);
}

equalsButton.addEventListener("click", calculate);

// Delete functionality

function deleteNum() {
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);

}
  
deleteButton.addEventListener("click", deleteNum);
  

