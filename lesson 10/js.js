// - создать массив с 20 числами.

// let number = [11,15,2,50,100,18,9,88,500,6]
// -- при помощи метода sort и колбека  отсортировать массив.
// function sort(callback) {
//     return callback()
// }

// let callback = sort(function () {
//     let up = number.sort((a,b) =>{
//         if(a<b){
//            return -1
//         }
//     })
//     console.log(up)
// })




// let sort = number.sort((a,b) => a-b)
// console.log(number)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// function sort(callback) {
//     return callback()
// }


// let callback = sort(function () {
//     let up = number.sort((a,b) =>{
//         if(a>b){
//            return -1
//         }
//     })
//     console.log(up)
// })



// let sort = number.sort((a,b) => b-a)
// console.log(number)



// -- при помощи filter получить числа кратные 3

// let numbers=[11,15,2,50,100,18,9,88,500,6]

// let filter = numbers.filter((value) => {
//         return value % 3 == 0
// })
// console.log(filter)


// -- при помощи filter получить числа кратные 10

// let filter = numbers.filter((value) => {
//     return value % 10 ==0
// })
// console.log(filter)

// -- перебрать (проитерировать) массив при помощи foreach()

// let foreach = numbers.forEach(value => {
//     if(value %3) {
//         return
//     }
//     console.log(value)
// })

// let foreach = numbers.forEach(value => {
//     if(value %10) {
//         return
//     }
//     console.log(value)
// })


// let foreach = numbers.forEach(value => {
//     if(value == numbers.length) {
//         return
//     }
//     console.log(value)
// })




// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = numbers.map((value) => {
//     return value*3
// })
// console.log(map)
// console.log(numbers)


// - создать массив со словами на 15-20 элементов.
// let arr = ["Andriana","Jerry","Julia","Amilia","Anton","Josh","Yura","Olga","Roman","Ruslan",'Alex','Texa','Sasha','Sergey','Bart','Vovan','Helga']
// -- отсортировать его по алфавиту в восходящем порядке.

// arr.sort()
// console.log(arr)


// -- отсортировать его по алфавиту  в нисходящем порядке.

// arr.reverse()
// console.log(arr)

// -- отфильтровать слова длиной менее 4х символов

// arr.forEach((value) =>{
//     if(value.length >4){
//         return
//     }
//     console.log(value)
// })

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// arr.map((value)=>{
//       if(value += "!" ){
//           console.log(value)
//       }
//       return value

// })

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let arrsort = users.sort((a,b) => {
//      if(a.age<b.age) {
//          return -1
//      }
  
// })
//   console.log(arrsort)


// let arrsort = users.sort((a,b) => b.age-a.age)
//  console.log(arrsort)


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortname = users.sort((a,b) => {
//    if(a.name.length < b.name.length){
//        return -1
//    }
// })
// console.log(sortname)

// let sortname1 = users.sort((a,b)=> b.name.length - a.name.length)
// console.log(sortname1)


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)


// let json = JSON.stringify(users);
// let parse = JSON.parse(json);


// let newid = users.map((value,index) => {
//       value.id = index
//       return value
// })
// console.log(newid)
// console.log(parse)


// - відсортувати його за індентифікатором

// let sortid = users.sort((a,b) => {
//     if(a.id > b.id) {
//         return -1
//     }
// })
// console.log(sortid)

// let sortid = users.sort((a,b) => {
//     if(a.id < b.id) {
//         return -1
//     }
// })
// console.log(sortid)

// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calculator (a,b,callback) {
//     callback(a,b)
// }

// let gotovo = calculator(10,20, (a,b) => console.log(a+b))
// let gotovo1 = calculator(10,20, (a,b) => console.log(a-b))
// let gotovo2 = calculator(10,20, (a,b) => console.log(b-a))
// let gotovo3 = calculator(10,20, (a,b) => console.log(a/b))
// let gotovo4 = calculator(10,20, (a,b) => console.log(b/a))
// let gotovo5 = calculator(10,20, (a,b) => console.log(a*b))




// function calculator (a,b,c,callback) {
//     callback(a,b,c)
// }

// let gotovo = calculator(10,20,30, (a,b,c) => console.log(a+b+c))
// let gotovo1 = calculator(10,20,30, (a,b,c) => console.log(a-b-c))
// let gotovo2 = calculator(10,20,30, (a,b,c) => console.log(b-a-c))
// let gotovo3 = calculator(10,20,30, (a,b,c) => console.log(a/b/c))
// let gotovo4 = calculator(10,20,30, (a,b,c) => console.log(b/a/c))
// let gotovo5 = calculator(10,20,30, (a,b,c) => console.log(a*b*c))
// let gotovo6 = calculator(10,20,30, (a,b,c) => console.log(a*b/c))
// let gotovo7 = calculator(10,20,30, (a,b,c) => console.log(a+b*c))
// let gotovo8 = calculator(10,20,30, (a,b,c) => console.log(a-b*c))
// let gotovo9 = calculator(10,20,30, (a,b,c) => console.log(a/b*c))
// let gotovo10 = calculator(10,20,30, (a,b,c) => console.log(a*b/c))
