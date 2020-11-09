// -- створити об'єкт (не меньше 5ти властивостей) який описує

// let objdog = {
//     dogname: "jack",
//     old: 2,
//     color: "browm"
// }

// let objhuman = {
//     name: "Harry",
//     old: 25,
//     race: "white"
// }

// let objcar = {
//     carmodel: "audi a7",
//     startsale: "2019",
//     color: "black"
// }

// let objapp = {
//     app: "2 rom",
//     tower: "5",
//     downtown: "yes"
// }

// let objbook = {
    
//     roman: "empire",
//     drama: "13 minutes",
//     bestseller: "2020"
// }

// let user = {
//     dognick: "jack",
//     Nameuser: "Bart",
//     car: "browm",
//     app: "3 room",
//     book: "Cunfucius"
// }

// -- Створити масив та вивести його в консоль:

// let dogs = [
//     {dnick: 'oleg', age: 5, status: false},
//     {nick: 'fred', age: 10, status: true},
//     {nick: 'martin', age: 29, status: true},
//     {nick: 'layla', age: 8, status: false},
//     {nick: 'olya', age: 4, status: true},
// ];

// let human = [
//     {name: 'anya', age: 21, status: false},
//     {name: 'andrew', age: 28, status: false},
//     {name: 'dasha', age: 19, status: true},
//     {name: 'mira', age: 30, status: true},
//     {name: 'tanya', age: 28, status: false},
//     {name: 'sergey', age: 25, status: true}
// ]

// let car = [
//     {brand: "BMW", number: 1000, status: false},
//     {brand: "AUDIO", number: 100500, status: false},
//     {brand: "Mercedes Benz", number: 5245524, status: true},
//     {brand: "TOYOTA", age: 30, number: 15484121184, status: true},
//     {brand: "FORD", age: 28, number: 15484121184, status: false},
//     {brand: "HYUNDAI", age: 25, number: 99999999999, status: true}
// ]


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let user = {
//     house: [1,2,3],
//     vadila: "vasya",
//     igrashka: true,
//     table: false,
//     bag: {color: "red", color: "green", color: "red"}
// };

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// console.log(users[7].status);
// console.log(users[10].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age, users[4]. name);
// console.log(users[5].age, users[5]. status);


// let content = document.getElementById('content');
// let rules = document.getElementById('rules');
// content.innerText= "president";
// rules.innerText='yes yes yes ';
// content.style.backgroundColor='red';
// content.style.color='blue';
// rules.style.color='blue';
// rules.style.backgroundColor='red';
// console.log(rules.classList);
// rules.classList.add('fc_bp');
// let element = document.getElementsByClassName('fc_rules');
// for(let elements of element){
//     elements.style.color='red';
// }
