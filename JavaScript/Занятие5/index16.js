//Задать массив
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
let arrs = new Array(5, 2, 3, 1);

//Добавление элементов в конец массива
arr.push("редиска");

//Удаление элементов из конца массива
arr.pop();

//Удаление элементов из начала массива
arr.shift();

//Добавление элементов в начало массива
arr.unshift("огурец");
console.log(arr);

//фильтр -возвращает массив из всех подходящих элементов
const arrFilter = arr.filter((el) => el !== "изучаю");
console.log(arrFilter);

//сортирует массив на месте, меняя в нём порядок элементов
arrs.sort();
console.log(arrs);

//Меняет порядок элементов в массиве на обратный
arrs.reverse();
console.log(arrs);

//Ищет первый элемент, который удовлетворяет условию переданному в callback функции
const ell = arrs.find((ell) => ell < 5);
console.log(ell);

//Возвращает индекс первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции

const ell2 = arrs.findIndex((ell) => ell < 5);
console.log(ell2);

//удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
document.write("<br>" + arr);

//копирование части массива(с какой позиции) (пустые скобки - копирование целиком)
const cloneArr = arr.slice(3);
console.log(cloneArr);

//копирование с использованием Array.from:
const cloneArr2 = Array.from(arr);
console.log(cloneArr2);

//копирование - spread operator позволяет “вытаскивать” перебираемые элементы из своего контейнера(оператор - ...)
const cloneArr3 = [...arr];
console.log(cloneArr3);

//копирование с помощью функции .map()
const cloneArr4 = arr.map((item) => item);
console.log(cloneArr4);

//ЦИКЛЫ

//1
for (let i = 0; i < arr.length; i++) {
  console.log(i); //порядковый номер элемента
  console.log(arr[i]); //значение элемента
}

//2
for (let ar of arr) {
  console.log(ar);
}

//3
arr.forEach(function (ar) {
  console.log(ar);
});

//Задачки

let arr1 = ["js", "css", "html"];
document.write(arr1[0] + "<br>");

const arr2 = [0, 1, false, 2, undefined, "", 3, null];
const filteredArr2 = arr2.filter(Boolean);
document.write(filteredArr2 + "<br>");

let arr3 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];
for (let i = 0; i < arr3.length; i++) {
  let innerArrayLength = arr3[i].length;

  if (innerArrayLength > 3) {
    document.write(i);
  }
}
