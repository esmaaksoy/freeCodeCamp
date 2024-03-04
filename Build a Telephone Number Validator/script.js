const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const div = document.getElementById("results-div");
checkBtn.addEventListener("click", () => {
  if (!input.value.trim()) {
    alert("Please provide a phone number");
  } else if(input.value) {
    div.innerText = `Valid US number: ${input.value}`;
  }else{
    div.innerText = `Invalid US number: ${input.value}`; 
  }
  input.value = "";
});
clearBtn.addEventListener("click", () => {
  div.innerText = "";
});
