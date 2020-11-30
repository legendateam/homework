
// - створити функцію яка виводить масив

// let array = [5,1,7,0,11,54989,84,29,7];
// function printArray(arr) {
//      console.log(arr)
// }
// printArray(array)

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function nullarr (length) {
//     let arr1 = []
//     for (let i=0; i<=array.length; i++) {
//         arr1.push(Math.round(Math.random()* 100));
//     }
//     return arr1
// }
// let arr2 = nullarr()
// printArray(arr2)

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function numbermin(a,b,c){
//     let min = Math.min(a,b,c);
//     console.log(min);
//     return min
// }
// let min = numbermin(3,50,5)
// console.log(min)


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function numbermax(a,b,c){
//     let max = Math.max(a,b,c);
//     console.log(max);
//     return max
// }
// let max = numbermax(3,50,5)
// console.log(max)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше


// function func() {
//     let min = Math.min (10,5,50,20)
//     let max = Math.max (10,5,50,20)
//     console.log(max);
//     return min
// }
// const min = func()
// console.log(min)


// - створити функцію яка виводить масив

// function array(paramas) {
//     console.log(paramas);
// };
// array([100,24,13]);


// - створити функцію яка повертає найбільше число з масиву

// function name(params) {
//     let max = params[0]
//     for(const maximus of params) {
//         if (maximus > max) max = maximus;
//     }
//     return max
// }
// const max = name([20,1,15,3,2,7,100,55,18])
// console.log(max)


// - створити функцію яка повертає найменьше число з масиву

// function name(params) {
//     let min = params[0]
//     for(const minimus of params) {
//         if (minimus < min) min = minimus;
//     }
//     return min
// }
// const min = name([20,1,15,3,2,7,100,55,18])
// console.log(min)

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function name(params) {
//     let suma = 0;
//     for(const allsuma of params) {
//         suma += allsuma
//     }
//     return suma
// }

// const suma = name([10,20,30,10,30])
// console.log(suma)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function name(params) {
//     let suma = 0
//     for(const all of params){
//         suma+=all
//     }
//     return suma/params.length
// }
// const suma = name([10,20,30,10,30])
// console.log(suma)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let array = ["mass", 25, 10, true, {name: "ira", age:25, status: false }, {name: "vasya"}, 100]
// function name(paramas) {
//     let object = 0;
//     for (const element of paramas) {
//         if (typeof element === "object") {
//         object++
//       }
//     }
//     return object
// } 

// const object = name(array)
// console.log(object)


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них



// let array = ["mass", 25, 10, true, {name: "ira", age:25, status: false }, {name: "vasya"}, 100]
// function name(paramas) {
//     let object = 0;
//     for (const element of paramas) {
//         if (typeof element === "object"){
//             for(const value in element) {
//                 object++
//             }
//       }
//     }
//     return object
// } 

// const object = name(array)
// console.log(object)



// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


// function name(arr,arr2) {
//     let array = [];
//     for(let i=0; i<arr.length; i++) {
//         array.push(arr[i]+arr2[i])
//     };
//     return array;
// };

// const vid = name([1,2,3,4], [2,3,4,5])
// console.log(vid)

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let array = [1,2,3,4];

// function name(arr, index) {
//     let array1 = [1,2,3,4];
//     if (index<arr.length-1) {
//         let t = array1[index];
//         array1[index] = array1[index+1];
//         array1[index+1] = t;
//     }
//     return array1
// };

// const fu = name(array, 2);
// console.log(array);
// console.log(fu);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]



// function name(params) {
//     let z = [];
//     let n = [];
//     for(const array of params) 
//     if(array ===0) {
//         z.push(0)
//     } else {
//         n.push(array)
//     }
//     return n.push(z)
// }

// const array = name([1,0,6,0,3,0,1,2,3,4,0,0,0,5,0,1])
// console.log(array)


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


// function add(text, div) {
//     const tag = document.createElement(div) 
//     tag.innerText = text
//     document.body.appendChild(tag)
// }

// const div = add("Hello owu", "div")

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let autoria = [
//      cars=
//      { model: 'chevrolet', yearvupysk : "2000" , power: "2.0" , color: "red"},
//      { model: 'ford', yearvupysk : "2020" , power: "1.6" , color: "blue"},
//      { model: 'gmc', yearvupysk : "1970" , power: "2.5" , color: "black"},
//      { model: 'yoyota', yearvupysk : "2018" , power: "1.3" , color: "yellow"},
//      { model: 'mitsubishi', yearvupysk : "2008" , power: "1.8" , color: "white-black"},
//      { model: 'dewoo', yearvupysk : "2000" , power: "1.4" , color: "green"},
//      { model: 'lada', yearvupysk : "1988" , power: "0.9" , color: "brown"},
//      { model: 'tesla', yearvupysk : "2019" , power: "0.0" , color: "light-blue"},
//      { model: 'dodge', yearvupysk : "2005" , power: "2.0" , color: "pink"},
//      { model: 'mercedes-benz', yearvupysk : "2010" , power: "1.5" , color: "purple"},
// ];


// function name(array, idt) {
//     const id = document.getElementById(idt);
//     const ul = document.createElement("ul");
//     for (let i = 0; i < array.length; i++) {
//         const user = array[i];
//         const li = document.createElement("li");
//         li.innerHTML = `${i+1} - ${user.model}`;
//         ul.appendChild(li);
//         document.body.appendChild(ul);
//     };
//     id.appendChild(ul);
// };
// const a = name(autoria, "car")




// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// function name(array, idt) {
//     const id = document.getElementById(idt);

//     for (let i = 0; i < array.length; i++) {
//         const user = array[i];
//         const div = document.createElement("div");
//         const h1 = document.createElement("h1");
//         const h2 = document.createElement("h2");
//         const p = document.createElement("p");
//         const color = document.createElement("div");

//         for(const key in user.color) {
//            const h3 = document.createElement("h3")
//            h3.innerText =  user.color[key]
//            color.appendChild(h3)
//         }
        
//         h1.innerHTML = `${user.model}`;
//         h2.innerHTML = `${user.yearvupysk}`;
//         p.innerHTML = `${user.power}`;

//         div.appendChild(h1)
//         div.appendChild(h2)
//         div.appendChild(p)
//         div.appendChild(color)

//         id.appendChild(div);
//     };
    
// };
// const a = name(autoria, "car")

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату:

// function s(arr, city) {
//     let users = arr.splice(0)
//     let cities = city.splice(0)

//     for(const city of cities) {
//         for(const user of users) {
//             if(city.user_id === user.id) {
//                 user.adress = city
//             }
//         }
//     }
//     return users
// }

// const a = s(usersWithId, citiesWithId)
// console.log(a)

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//          {
//              title: 'Первое правило Бойцовского клуба.',
//              body: 'Никому не рассказывать о Бойцовском клубе.'
//          },
//          {
//              title: 'Второе правило Бойцовского клуба.',
//              body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//          },
//          {
//              title: 'Третье правило Бойцовского клуба.',
//              body: 'В схватке участвуют только двое.'
//          },
//          {
//              title: 'Четвертое правило Бойцовского клуба.',
//              body: 'Не более одного поединка за один раз.'
//          },
//          {
//              title: 'Пятое правило Бойцовского клуба.',
//              body: 'Бойцы сражаются без обуви и голые по пояс.'
//          },
//          {
//              title: 'Шестое правило Бойцовского клуба.',
//              body: 'Поединок продолжается столько, сколько потребуется.'
//          },
//          {
//              title: 'Седьмое правило Бойцовского клуба.',
//              body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//          },
//          {
//              title: 'Восьмое и последнее правило Бойцовского клуба.',
//              body: 'Новичок обязан принять бой.'
//          },
     
//      ];


// ];
// let elem = document.querySelector('#elem')
// function func(arr){
//         for(let elem1 of arr){
//         if(elem1.title){
//             let zag = document.createElement('h2');
//             zag.innerText = elem1.title;
//             elem.appendChild(zag);
//         } if(elem1.body){
//             let par = document.createElement('h4');
//             par.innerText = elem1.body;
//             elem.appendChild(par);
//         }
//     }
// }
// console.log(func(rules))






