const generated = document.querySelector("#generated");
const maxNumber = document.querySelector("#maxNumber");
const minNumber = document.querySelector("#minNumber");
const average = document.querySelector("#average");
const summa = document.querySelector("#summa");
const work = document.querySelector("#work");

function generate() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(
      (Math.random() * 10 < 5 ? -1 : 1) * Math.round(Math.random() * 10)
    );
  }
  generated.innerHTML = "Сгенерировали: " + numbers;
  let max = Math.max.apply(null, numbers);
  maxNumber.innerHTML = "Максимальное: " + max;
  let min = Math.min.apply(null, numbers);
  minNumber.innerHTML = "Минимальное: " + min;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let averageNumbers = sum / numbers.length;
  let workNumbers = numbers.reduce((a, b) => a * b);
  summa.innerHTML = "Сумма чисел: " + sum;
  average.innerHTML = "Среднее арифметическое: " + averageNumbers;
  work.innerHTML = "Произведение: " + workNumbers;
}
