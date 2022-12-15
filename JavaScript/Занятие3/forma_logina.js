function check() {
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");

    document.getElementById('errorMessage').innerHTML = "";

    if (email.value == '')
        document.getElementById('errorMessage').innerHTML += "Ваш емейл не заполнен<br>";
    
        if (password.value == '')
        document.getElementById('errorMessage').innerHTML += "Ваш пароль не заполнен<br>";
    
        if (password.value.lenght <=5){
            document.getElementById('errorMessage').innerHTML += "Ваш пароль короткий<br>";
        }
}