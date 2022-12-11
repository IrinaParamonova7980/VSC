function clickMe() {
    let catNameInput = document.getElementById("name");
    console.log(catNameInput.value);
}

let checks = document.getElementsByName("food");
console.log(checks[0].checked);
console.log(checks[1].checked);
console.log(checks[2].checked);

function changeMe() {
    let catImage = document.getElementById("catImage");
    catImage.src = "https://wikiparazit.ru/wp-content/uploads/2020/08/evropeyskaya-koshka-dikiy-kot1.jpg";
}

console.log(document.getElementsByName("food"));

function select(sender) {
    sender.classList.add("selected");
}