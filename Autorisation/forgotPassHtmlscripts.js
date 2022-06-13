const pass1 = document.getElementById("funcNewPass")
const pass2 = document.getElementById("funcConfNewPass")
// let submit = document.getElementById("buttonAccept")
function but_click()
{
    check()
    return false
}
function check() {
    if (pass1.value != "" && pass2.value != "") {
        if (pass1.value === pass2.value) {
            alert("Пароли совпадают")
        } else {
            alert("Пароли не совпадают")
        }
        pass1.value = ''
        pass2.value = ''
    } else {
        alert("Поле для ввода пароля не заполнено")
    }
}

document.getElementById("checkform").onsubmit = function (){
    return false
}
