const fio = document.querySelector("#fio");
const surname = document.querySelector("#surname");
const name = document.querySelector("#name");
const patronymic = document.querySelector("#patronymic");
const button = document.querySelector("#button");

button.addEventListener("click", splitFullName);

function splitFullName() {
  let checkingForSpaces = fio.value.trim();

  let arr = checkingForSpaces.split(" ");

  let elementSurname = arr[0];
  checkingSurname =
    elementSurname[0].toUpperCase() + elementSurname.slice(1).toLowerCase();

  let elementName = arr[1];
  checkingName =
    elementName[0].toUpperCase() + elementName.slice(1).toLowerCase();

  let elementPatronymic = arr[2];
  checkingPatronymic =
    elementPatronymic[0].toUpperCase() +
    elementPatronymic.slice(1).toLowerCase();

  surname.innerHTML = checkingSurname;
  name.innerHTML = checkingName;
  patronymic.innerHTML = checkingPatronymic;
}
