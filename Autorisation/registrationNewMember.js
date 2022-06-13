const logNew = document.getElementById("regLogin")
const passNew = document.getElementById("regPassword")
const emailNew = document.getElementById("regEmail")
const loginAlreadyTaken = "Sanya"
const emailAlreadyUsed = "saswbutko@gmail.com"
let registrationSuccess = false;

function but_reg_click(){
    check_reg()
    return false
}
function check_reg(){
    if (logNew.value!= "" && passNew.value!= "" && emailNew.value != ""){
        if(loginAlreadyTaken === logNew.value){
            alert("Логин уже занят, попробуйте другой")
            logNew.value = ''
            registrationSuccess = false
        }
        else{
            registrationSuccess = true;
        }
        if(emailAlreadyUsed === emailNew.value){
            alert("Такой EMail уже занят, попробуйте другой")
            emailNew.value =''
            registrationSuccess = false
        }
        else{
            registrationSuccess = true;
        }
        if(registrationSuccess === true){
            alert("Регистрация прошла успешно")
            window.location.href = 'index.html'
        }

    }
    else
    {
        alert("Заполните все поля ввода")
    }


    document.getElementById("reg_sc").onsubmit = function (){
        return false
    }


}



