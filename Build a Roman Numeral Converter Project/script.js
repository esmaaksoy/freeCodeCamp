const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const div = document.getElementById("output");

const romanNumber = [
  { number: 1000, value: "M" },
  { number: 900, value: "CM" },
  { number: 500, value: "D" },
  { number: 400, value: "CD" },
  { number: 100, value: "C" },
  { number: 90, value: "XC" },
  { number: 50, value: "L" },
  { number: 40, value: "XL" },
  { number: 10, value: "X" },
  { number: 9, value: "IX" },
  { number: 5, value: "V" },
  { number: 4, value: "IV" },
  { number: 1, value: "I" },
];

const convertNumber = (num) => {
  let roman = "";
  for (let i = 0; i < romanNumber.length; i++) {
    while (num >= romanNumber[i].number) {
      roman += romanNumber[i].value;
      num -= romanNumber[i].number;
    }
  }
  return roman;
};

button.addEventListener("click", () => {
  if (!input.value.trim()) {
    div.innerText = "Please enter a valid number";
  } else if (input.value < 0) {
    div.innerText = "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    div.innerText = "Please enter a number less than or equal to 3999";
  } else {
    div.innerText = convertNumber(input.value);
  }
  input.value = "";
});
