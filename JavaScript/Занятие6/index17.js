//Чтобы сохранить кавычки, какие нам нужны (оборачиваем в обратный слеш)
let users = "Мы компания \"Google\"";

console.log(users);

//позиция слова в строке
let position = users.indexOf("Google");
console.log(position);

//возвращает слово из строки(-1 убрать последний символ)
let slised = users.slice(position,-1);
console.log(slised);

//убрать со 2-го символа длиной 7
let ur = users.substr(2, 7);
console.log(ur);

//замена слова (google на apple), /google/i-флаг для модификации регистра
let apple = users.replace(/google/i, "Apple");
console.log(apple);

let message = "Привет, username!";
let name = "Ирина";
let newname = message.replace("username", name);
console.log(newname);

//все буквы заглавные
let big = name.toUpperCase();
console.log(big);

//все буквы маленькие
let small = name.toLowerCase();
console.log(small);

let username = "ирина";

//сравнение двух слов с приведением их к одному регистру
if (name.toLowerCase() == username.toLowerCase()) {
  console.log(true);
}

console.log(name[1]);

console.log(name[name.length - 1]);


//разделить текст по признаку (,) в массив
let txt = "Москва,Санкт-Петербург,Новосибирск,Казань";
let cities = txt.split(",");
console.log(cities);


//объединить текст по другому признаку (:)
console.log(cities.join(":"));


//сделать строку без пробелов
let str = "     Москва";
let clean = str.trim(str);
console.log(clean);


//сегодняшняя дата
let now = new Date();
console.log(now);

//создает дату от какого-то числа (здесь сдвиг на сутки, от миллисекунд)
let timestamp = new Date(24 * 3600 * 1000);
console.log(timestamp);

//запись даты через цифры
let date = new Date("2021-01-26");
console.log(date);

//задается год, месяц (начинается с 0), день и т.д.
let num = new Date(2021, 0, 26);
console.log(num);

//вывести год, месяц (с 0), день и т.д
console.log(num.getDate());

console.log(num.getMonth() + 1);

console.log(num.getFullYear());

//возвращает таймстамп (кол-во миллисекунд с 1 января 1970г)
console.log(num.getTime());

//Вывести дату в нужном нам формате
console.log(`${num.getDate()}.${num.getMonth() + 1}.${num.getFullYear()}`);

//Вывод даты в зависимости от страны
  var options={
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timezone: 'UTC',
};

console.log(new Date().toLocaleString("en", options));


//поменять дату (здесь год)
num.setFullYear(2022);
console.log(num);

//сколько прошло времени с какого-то момента (в миллисекундах)(перевод в часы)
let diff = Date.now() - date;
console.log(diff / 1000 / 3600);

//за какое время отработал цикл
let start2 = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end2 = Date.now(); // заканчиваем отсчёт времени
//alert(`Цикл отработал за ${end - start} миллисекунд`); // вычитаются числа, а не даты

//считывает дату из строки, возвращает таймстамп
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

//alert(ms); // 1327611110417 (таймстамп)

let date1 = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

// количество миллисекунд с 1 января 1970 года
//alert(Date.now());



//округление в меньшую сторону до целого
console.log(Math.floor(0.01));

//округление в большую сторону
console.log(Math.ceil(0.01));

//округление по математическим правилам
console.log(Math.round(0.01));

//округление в меньшую сторону до дробного до двух знаков
console.log((0.023445).toFixed(2));

//рандом
console.log(Math.random());

//рандом с увеличением в 100 раз и округлением
console.log(Math.round(Math.random() * 100));

//массив, сгенерированный из случайных чисел
let arr = [];
arr.push(Math.round(Math.random() * 100));

arr.push(Math.round(Math.random() * 100));

arr.push(Math.round(Math.random() * 100));

arr.push(Math.round(Math.random() * 100));
console.log(arr);


//Возвращения максимального значения из чисел, указанных в качестве параметров
let max = Math.max(-65,8,6,1,90,-4,2);
//alert("Максимальное число равно " + max.toString());

let summ = "   120p.   ";
console.log(summ.trim(summ));
