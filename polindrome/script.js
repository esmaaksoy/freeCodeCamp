const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const div = document.getElementById("result")

function isPalindrome(text) {
   text = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false; 
        }
    } 
    return true; 
}

button.addEventListener("click", () => {

  if (!input.value.trim()) {
    alert("Please input a value");
  } else if(isPalindrome(input.value)) {
  div.innerText=`${input.value} is a palindrome`
  }else{
    div.innerText=`${input.value} is not a palindrome`
  }
  input.value = ""
});
