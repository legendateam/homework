// завдання 1
// let num = [5, 22, 43, 1, 232];
// console.log(num);

// завдання 1.1
// let string = ["name", "age ","adress","car ","girl"];
// console.log(string);

// завдання 1.2
// let all = ["name", "age", "adress", "car", "girl", 5, 22, 43, 1, 232, true, false];
// console.log(all);

// Завдання 2
// let student = [[1]];
// console.log (student);
// або
// console.log (all[2]);

// Завдання 2.1

// for (let a=0; a<10; a++) {
//     document.write("<div>DIVKA</div>");
// };

// Завдання 2.2
//  for (let a=0; a<10; a++) {
//      document.write("<div>DIVKA</div>"[2]);
// };

// або

// let div = ["morkva", "kapusta", "tomato", "ogirok"]
// for (let a=0; a<10; a++) {
//     document.write(`<div>mandarun ${div[1]} apelsun apple</div>`);
// };

// Завдання 2.3

// let a =0;
// while (a < 20) {
//     document.write(`<h1>welcome ${a}</h1>`)
//     a++;
// };

// Завдання 2.4

// let a =0;
// let b = ["intel", "nvidia", "amd", "apple"];
// while (a < 20) {
//     document.write(`<h1>welcome ${b[0]}</h1>`);
//     a++;
// };

// Завдання 2.5

// let num = [10, 55, 29, 1, 754, 6, 66, 92, 01, 100];
// for (let element of num) {
//     console.log(element);
// };

// Завдання 2.6
// let num = ["razer", "steelseries", "hyperx", "hator", "msi", "asus", "aorus", "noname", "biostar", "asrock"];
// for (let element of num) {
//     console.log(element);
// };

// Завдання 2.7
// let num = ["razer", 5, true, 29, "msi",false, "aorus", "noname", false, 100];
// for (let element of num) {
//     console.log(element);
// };

// Завдання 2.8

// const task = ["a", 5, true, 10, "b", false,  "c", "d", false, 8, "e ", false, 9, true, 99, 74, 12, false, true, "f", "g", 
// true, "n", 122, 10, true, "l", 452, "p", false];

// for (let a = 0; a < task.length; a++) {
//     if (typeof task[a]=== "boolean") {
//         console.log(task[a])
//     };
// };

// Завдання 2.9

// const task = ["a", 5, true, 10, "b", false,  "c", "d", false, 8, "e ", false, 9, true, 99, 74, 12, false, true, "f", "g", 
// true, "n", 122, 10, true, "l", 452, "p", false];

// for (let a = 0; a < task.length; a++) {
//     if (typeof task[a]=== "number") {
//         console.log(task[a])
//     };
// };

// Завдання 2.10

// const task = ["a", 5, true, 10, "b", false,  "c", "d", false, 8, "e ", false, 9, true, 99, 74, 12, false, true, "f", "g", 
// true, "n", 122, 10, true, "l", 452, "p", false];

// for (let a = 0; a < task.length; a++) {
//     if (typeof task[a]=== "string") {
//         console.log(task[a])
//     };
// };

// Завдання 2.11
// let povar = ["induk", 2, 4, 1, 6, 2, true, "gysak", "kyrka", 9]
// for (let pomichnuk = 0; pomichnuk < povar.length; pomichnuk++) {
//     console.log(povar [pomichnuk]);
// };
     

// Завдання 2.12

// for (let a=1; a<=10; a++) {
    
//     document.write(a);
//     console.log(a)
// };

// Завдання 2.13

// for (let a=1; a<=100; a++) {
//     document.write(a);
//     console.log(a);
// };

// Завдання 2.14

// for (let a=1; a<=100; a+=2) {
//     document.write(a);
//     console.log(a);
// };

// Завдання 2.15-16

// for(let a=0; a<=100; a++){
//     if (a%2===0) {
//         console.log(a);
//         document.write(a);
//     }
// }


// Завдання 2.17
// for(let a=0; a<=100; a++){
//     if (a%2===1) {
//         console.log(a);
//         document.write(a);
//     }
// }

// Завдання 2.18

// for (let m =0; m <= 2; m++) {
//     for (let s=0; s <=60; s++) {
//     console.log(m, s);
//     }
// }

// Завдання 2.19

// for (let h =0; h <= 2; h++) {
//     for (let m=0; m<=60; m++) {
//         for(let s=0; s<=60; s++ ) {
//          console.log(h, m, s);
//         }
//     }
// }
// for (let h = 0; h<=2; h++) {
//     for(let m=0; m<=20; m++) {
//         for(let s=0; s<=60; s++) {
//         console.log(h,m,s)
//         }        
//     } 
// }

// Додатково

// let m = [ 'a', 'b', 'c'] ;
// for (a=0; a < m.length; a++) {
//  document.write(m[a])
// };

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let matrix = ['a', 'b', 'c']
// let i = 0;
// while (i<matrix.length){
// document.write(matrix[i]);
// i++
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let a = ['a', 'b', 'c']
//  for (let b of a) {
//      console.log(b)
//  }


// Завдання 3 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та

// 3.1

// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while(i<=1){
//     document.write(mass)
//     i++
// }

// 3.2

// let mass = [2,17,13,6,22,31,45,66,100,-18];
//     for (let i=0; i<=1; i++) {
//         document.write(mass)
//     };

// 3.3

// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while(i<=mass.length) {
//     if (i % 2 ===1) {
//         document.write(i);
//         console.log(i);
//     }
//     i++
// }

// 3.4

// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<=mass.length; i++) {
//     if (i%2 ===1) {
//     document.write(i)
//        }
// }

// 3.5

// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while(i<=mass.length) {
//     if (i % 2 ===0) {
//         document.write(i);
//         console.log(i);
//     }
//     i++
// }

// 3.6
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<=mass.length; i++) {
//     if (i%2 ===0) {
//     document.write(i)
//        }
// }

// 3.7-8-9 не знаю(
//     7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// // 3.10  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let mass=[];
// for (i=0; i<=50; i++) {
//     if (i%2 ===0) {
//     mass = i;
//     console.log(i)
//        }
// }

// let mass=[];
// for (i=0; i<=50; i++) {
//     if (i%2 ==1) {
//     mass = i;
//     console.log(i)
//        }
// }
