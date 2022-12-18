function validate_form() {
    let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let email = document.getElementById("mail");
  let firstpassword = document.getElementById("firstpassword");
  let secondpassword = document.getElementById("secondpassword");
  let day = document.getElementById("day");
  let year = document.getElementById("year");
  let phone = document.getElementById("phone");

  document.getElementById("errorMessageFirstName").innerHTML = "";
  document.getElementById("errorMessageLastName").innerHTML = "";
  document.getElementById("errorMessageMail").innerHTML = "";
  document.getElementById("errorMessageFirstPassword").innerHTML = "";
  document.getElementById("errorMessageSecondPassword").innerHTML = "";
  document.getElementById("errorMessageDay").innerHTML = "";
  document.getElementById("errorMessageMonth").innerHTML = "";
  document.getElementById("errorMessageYear").innerHTML = "";
  document.getElementById("errorMessageSex").innerHTML = "";
  document.getElementById("errorMessagePhone").innerHTML = "";

 

  if (firstname.value == "") {
    document.getElementById("errorMessageFirstName").innerHTML +=
      "Пожалуйста, введите имя";
    return false;
  }
  if (lastname.value == "") {
    document.getElementById("errorMessageLastName").innerHTML +=
      "Пожалуйста, введите фамилию";
    return false;
  }

  if (email.value == "") {
    document.getElementById("errorMessageMail").innerHTML += "Пожалуйста, введите Ваш email";
    return false;
  }

  if (firstpassword.value == "") {
    document.getElementById("errorMessageFirstPassword").innerHTML +=
      "Пожалуйста, придумайте пароль";
    return false;
  }

  if (firstpassword.value.length <= 8) {
    document.getElementById("errorMessageFirstPassword").innerHTML +=
      "В пароле должно быть не меньше 8 символов";
    return false;
  }

  if (secondpassword.value == "") {
    document.getElementById("errorMessageSecondPassword").innerHTML +=
      "Пожалуйста, подтвердите пароль";
    return false;
  }

  if (secondpassword.value != firstpassword.value) {
    document.getElementById("errorMessageSecondPassword").innerHTML +=
      "Пароль не совпадает";
    return false;
  }

    if (day.value == "") {
    document.getElementById("errorMessageDay").innerHTML += "Пожалуйста, введите день";
    return false;
  }

  day.onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
  }

  if (document.form.month.selectedIndex == 0) {
    document.getElementById("errorMessageMonth").innerHTML += "Пожалуйста, выберите месяц";
    return false;
}

  if (year.value == "") {
    document.getElementById("errorMessageYear").innerHTML += "Пожалуйста, введите год";
    return false;
  }

   if ((document.form.sex[0].checked == false) && (document.form.sex[1].checked == false)) {
    document.getElementById("errorMessageSex").innerHTML += "Пожалуйста, выберите Ваш пол";
    return false;
}

  if (phone.value == "+7") {
    document.getElementById("errorMessagePhone").innerHTML += "Пожалуйста, введите Ваш номер телефона";
    return false;
  }

  if (phone.value.length <= 8) {
    document.getElementById("errorMessagePhone").innerHTML +=
      "Недостаточно цифр";
    return false;
  } 
  else {
    alert(`Добро пожаловать, ${firstname.value}!`);
  }
}

let modal = document.querySelector('.modal');
let close = document.getElementById("close");
let open = document.getElementsByTagName("button-open");

function modalClose() {
  modal.style.display = 'none';
}

function modalOpen() {
  modal.style.display = 'block';
}


