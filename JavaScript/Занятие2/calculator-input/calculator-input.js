function enterNumberAndCount(operation) {
  const [a, b] = enterNumber();
  const result = outputTheResult(a, b, operation);
  document.getElementById('total').value = result;
}

function enterNumber() {
  let a = Number(document.getElementById('first-number').value);
  let b = Number(document.getElementById('second-number').value);
   return [a, b]; 
  }

function outputTheResult(a, b, operation) {
  switch (operation) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "/":
      if (b == 0) {
        alert("На ноль делить нельзя");
      }
      else { res = a / b };
            break;
    case "*":
      res = a + b;
      break;
  }
  return res;
  }



 