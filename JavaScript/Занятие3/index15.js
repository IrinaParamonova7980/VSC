function check() {
    let result = document.getElementById("test").value;
    if (result =='') {
        alert('поле не заполнено');
    }
}

function compare(a, b) {
    if (a > b) {
        console.log(a);
        return a;
    }
    else{
        return b; 
    }
}

function compare2(a, b) {
    if (a > b && a>c) {
        console.log(a);
        return a;
    }
    else if (b > a && b>c) {
                return b; 
    }
    else {
        return c;
    }
}

function checkAge(age) {
    if (age >= 18)
        alert("все ок");
    else
    alert("вход запрещен");
}

function checkAge2(age) {
    (age >= 18)? alert("все ок"):alert("вход запрещен");
}

function weekDayName(number) {
    let name = '';
    switch (number) {
        case 1: name = 'Понедельник'; break;
        case 2: name = 'Вторник'; break;
        default: name = 'Такого дня нет';
    }
    return name;
}