const brand = document.getElementById("brand");
const mileage = document.getElementById("mileage");

const selectBrands = document
  .querySelector("#brand")
  .getElementsByTagName("option");

const selectMileages = document
  .querySelector("#mileage")
  .getElementsByTagName("option");

const inputs = document.querySelectorAll("input");
const radioDrive = document.querySelectorAll('input[name="drive"]');
const radioAge = document.querySelectorAll('input[name="age"]');
const parameter1 = document.querySelector("#parameter1");
const parameter2 = document.querySelector("#parameter2");
const parameter3 = document.querySelector("#parameter3");
const totalPriceElement = document.querySelector("#total-price");

document.getElementById("errorMessageBrand").innerHTML = "";
document.getElementById("errorMessageMileage").innerHTML = "";
document.getElementById("errorMessageAge").innerHTML = "";

/*Функция для вывода суммы при каждом нажатии 

for (const input of inputs) {
  input.addEventListener("input", function () {
    calculate();
  });
}

brand.addEventListener('change', function() {
  calculate();
});

mileage.addEventListener('change', function() {
  calculate();
});

 calculate();*/

function calculate() {
  let totalPrice = 0;

  for (const itemBrand of selectBrands) {
    if (itemBrand.selected) totalPrice = totalPrice + parseInt(itemBrand.value);
  }

  if (brand.value == "") {
    document.getElementById("errorMessageBrand").innerHTML +=
      "Выберите марку автомобиля";
    return false;
  }
  document.getElementById("errorMessageBrand").style.display = "none";

  for (const radio of radioDrive) {
    if (radio.checked) {
      totalPrice = totalPrice + parseInt(radio.value);
    }
  }

  /*Попытка вывести надпись 'Выберите возраст...' если не нажата ни одна кнопка радиобаттон
  
  let isEmpty = true;
  for (i = 0; i < radioAge.length; i++) {
    if (radioAge[i].checked === false) {
      isEmpty = false;
    } 
  }
 
    for (const radio of radioAge) {
      if (radio.checked) {
        totalPrice = totalPrice * parseFloat(radio.value);
      }
      if (isEmpty = false) {
        document.getElementById("errorMessageAge").innerHTML +=
          "Выберите возраст автомобиля";
      }
    }*/

  for (const radio of radioAge) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  for (const itemMileag of selectMileages) {
    if (itemMileag.selected)
      totalPrice = totalPrice + parseInt(itemMileag.value);
  }

  if (mileage.value == "") {
    document.getElementById("errorMessageMileage").innerHTML +=
      "Выберите пробег";
    return false;
  }
  document.getElementById("errorMessageMileage").style.display = "none";

  if (parameter1.checked) {
    totalPrice = totalPrice + parseInt(parameter1.value);
  }

  if (parameter2.checked) {
    totalPrice = totalPrice + parseInt(parameter2.value);
  }

  if (parameter3.checked) {
    totalPrice = totalPrice + parseInt(parameter3.value);
  }

  totalPriceElement.innerText = totalPrice;
}
