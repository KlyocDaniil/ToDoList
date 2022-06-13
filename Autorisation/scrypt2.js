const  log = document.getElementById("log")
const  pass = document.getElementById("pass")
const true_log = "adm"
const true_pass = "333"
function voity_but_click(){
    checkauto()
    return false
}

function checkauto() {
    if (log.value != '' && pass.value != '') {
        if (true_log === log.value && true_pass=== pass.value) {
            alert("Успешная авторизация")
window.location.href = 'todolist.html'
        }
        else
        {
            alert("Неправильный логин или пароль")
        }
        log.value = ''
        pass.value = ''
    }
    else
    {
        alert("Поле логина или пароля пустое")
    }
}
document.getElementById("acces").onsubmit = function (){
    return false
}