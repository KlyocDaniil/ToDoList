const addTask = document.getElementById("addTask");
const infoAboutTask = document.getElementById("textTask");
const tasksAll = document.getElementById("AllTasks");
// function but_click()
// {
//     Task()
//     return false
// }



let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks')) //Если есть что-то в локал стораге отправляем в массив таскс
// все дивы с классом Алл Таскс, для дин добавления таска
let todoItemElements = []

function Task(description){
    this.description = description
    this.completed = false
}


const createTeamplate = (task,index) => {
    return ` 
    <div id = "fillColor" class = "todo_item ${task.completed ? 'checked' : ''}">
                    <div id = "fillColors" class ="descriptionTask"> ${task.description}</div>
                     <div class ="buttons">
                            <input onclick="completeTask(${index})" 
                            class="btn-complete" type="checkbox" ${task.completed ?'checked' : ''}> 
                             <button onclick="deleteTask(${index})" class="btn-delete">Delete</button>
                     </div>
                </div>
    ` //динамические скобки,
}
const filterTasks =()=>{
    const activeTasks = tasks.length && tasks.filter(item => item.completed === false)
    const completedTasks = tasks.length && tasks.filter(item => item.completed === true)
    tasks = [...activeTasks,...completedTasks]
}

//----------HowItWorks?-----------------
//занялем предыдущее знаение
//проврка на значение
//далее добавляю динамически объекты в функции createTeamplate, где это позднее отправляется в (class = 'tasks')
//--------------------------------------
const fillHtmlList = () => {
tasksAll.innerHTML = "" //сделал пустым
    if(tasks.length > 0){ //если массив не пустой
        filterTasks() // почему здесь? потому что на след строке пробегаем по таск где узнаем че будет дальше, поэтому перед ним должны таск "преобразить"
        tasks.forEach((item,index) =>{
        tasksAll.innerHTML += createTeamplate(item,index) //отправить значения
        })
        todoItemElements = document.querySelectorAll('.todo_item')
    }
}
fillHtmlList();
//заполнение локал сторэджа
function updateLocalStorage  ()  {
    localStorage.setItem('tasks',JSON.stringify(tasks))
}


//при клике на кнопку добавить задачу отправляем в массив тасков
addTask.addEventListener('click', ()=>{
tasks.push(new Task(infoAboutTask.value)) // отправление в таскс
    updateLocalStorage();
    fillHtmlList();
    infoAboutTask.value = ''
})

// клик на таск
const completeTask = index => {
    tasks[index].completed = !tasks[index].completed
    if(tasks[index].completed) {

        todoItemElements[index].classList.add('checked')
    }
    else
    {
        todoItemElements[index].classList.remove('checked')
    }
    updateLocalStorage()
    fillHtmlList()

}
//удаление задачи
const deleteTask = index =>{
    todoItemElements[index].classList.add('delition')
    setTimeout(()=>
    {
        tasks.splice(index, 1) //splice функция удаления по 2ум аргументам (элемент,кол-во)
        updateLocalStorage()
        fillHtmlList()
    },500)
}





document.getElementById("checkTodoForm").onsubmit = function (){
    return false
}