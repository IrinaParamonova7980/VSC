let num = document.querySelector("#num");
let button = document.querySelector("#button");
const saveNumbers = document.querySelector("#saveNumbers");
let numbers = [];


button.addEventListener("click", () => {
  numbers.push(num.value);
  num.value = "";
  numbers.sort();
  
  let sum = 0;
 for (let number of numbers) {
    sum +=+number;
  }
  saveNumbers.innerHTML = numbers + "<br>" + ("Сумма: " + sum);
});
