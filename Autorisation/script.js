// 1 Переменные
//const неизменяем
// let изменияем, можно после числа определить строку
//const firstName = 'Daniil' // string
// const age = 19 // number
//const isProgrammer = true // bool

//const _ = 'private'
//const $ = 'dollar'
//const withnum5 = 'pyat'

// 2 Мутирование
//console.log('Имя : ' + firstName + ' Фамилия : '+ lastName + ' Ему ' + age + ' лет')
//alert('Имя : ' + firstName + ' Фамилия : '+ lastName + ' Ему ' + age + ' лет')
    //интерактивчик
    //const lastName = prompt('Введите фамилию')
    //alert(firstName + ' ' + lastName)
// 3 Операторы
//let currentYear = 2022
//const birthYear  = 2002

//const age = currentYear - birthYear

//const a = 10
//const b = 5

//let c = 32
//c+= a
//console.log(a + b)
//console.log(++currentYear) // ++в начале инкреметирует в консоль сразу, ++ в конце изменяет при следующем вызове
//console.log(c)

//4 Основные типы данных в JS
//const isProgrammer = true
//const name = 'Danil'
//const age = 26
//let x

//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(null)

// 5 Приоритет операторов
// const fullAge = 19
// const birthYear = 2002
// const currentYear = 2022
// > < >= <= Операторы сравнения
// const isFullAge  = (currentYear - birthYear) >= fullAge //2022-2002 = 20 >= 19 true
// Таблица приоритетов операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// console.log(isFullAge)


//6 Условные операторы
// const courseStatus = 'fail' // ready, fail , pending
// if (courseStatus === 'ready'){
// console.log('Курс уже готов и его можно проходить')
// }
// else //оптимизация дефолтная
// if (courseStatus === 'pending'){
// console.log('Курс пока находится в процессе разработки')
// }
// else {
//     console.log('курс не пошел :(')
// }


// const num1 = 42 // num
// const num2 = '42' // str
// console.log(num1==num2)// при == преобразовывает в один тип данных (true)
// console.log(num1===num2) // при === проверяет и тип данных (false)

 // const isReady = true
// if (isReady){
//     console.log('Всё готово')
// } else  {
//     console.log('Всё  не готово')
// }
//Тернарное выражение
//      isReady ? console.log('Всё готово!') : console.log('Всё не готово')

// 7 Булевая логика https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators ctrl f (Логическое И (en-US))
//true false true = х false = у
//&& если хотябы один у то будет у
// ||

//8 Функции
// function calculateAge(year){
//     return 2022 - year
// }
// console.log(calculateAge(2002))
// console.log(calculateAge(1992))
// console.log(calculateAge(2005))
// console.log(calculateAge(1975))
//
// function logInfoAbout(name, year){
//     const age = calculateAge(year)
//     if (age > 0 ){
//     console.log('Человек по имени ' + name + ' ему сейчас ' + age + ' лет')
// }else
//     {
//     console.log('Это уже будущее')
//     }
// }
//
// logInfoAbout('Даниил', 2002)
// logInfoAbout('папа', 1975)
// logInfoAbout('ребенок', 2030)

// 9 Массивы
// const cars = ['Mazda', 'Mers', 'Ford']
//console.log (cars)

// console.log(cars[2]) // ford
// console.log(cars[3]) // undefined
// console.log(cars.length) // 3

// cars[0]= 'Porshe'
// console.log(cars) //['Porshe', 'Mers', 'Ford']
// cars[3]= 'Mazda'
// console.log(cars) // ['Porshe', 'Mers', 'Ford', 'Mazda']
// cars[cars.length] = 'Chevrolet' // ['Porshe', 'Mers', 'Ford', 'Mazda', 'Chevrolet']
// console.log(cars)

//10 Циклы
// const cars = ['Mazda', 'Mers', 'Ford','Porshe']

// for(let i=0; i<cars.length; i++){
//     const car = cars [i]
//     console.log(car)
// }
//Одно и то же
// for(let car of cars){
//     console.log(car)
// }

// 11 Объекты
// const person = {
//     firstName : 'Daniil',
//     lastName : 'Klyoc',
//     year : 2002,
//     language : ['Ru', 'En'],
//     hasWife : false,
//     greet : function () {
//         console.log('greet from person')
//     }
// }
// console.log(person.firstName)
// console.log(person.lastName)
// // Одно и то же
// console.log(person.language)
// console.log(person["language"])
//
// const key = 'hasWife'
// console.log(person[key])
//
// person.hasWife = true
// console.log(person["hasWife"])
//
// person.isProgrammer = true
// console.log(person)
//
// person.greet()