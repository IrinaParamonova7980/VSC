function test(func) {
  func();
}

test(function () {
  console.log("Привет!");
})(function (a, b) {
  console.log(a + b);
})(2, 5);

console.log(
  (function (a, b) {
    return a + b;
  })(2, 5)
);

function sum1(a, b) {
  return a + b;
}

var sum2 = function (a, b) {
  return a + b;
};

var result = sum2(4, 5);

console.log(result);

let sum3 = (a, b) => a + b
let result = sum3(5, 7);
console.log(result);

let y = x => x * x;
console.log(y(3));

let showMessage1 = () =>
{ console.log("Привет!"); }
    
let showMessage2 = () => {
    let name = prompt("Как тебя зовут?");
    console.log("Привет!");
}

showMessage1();
