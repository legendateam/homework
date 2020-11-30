
// ===========================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }


// function Constructor(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag
//     this.action = action
//     this.attrs = attrs
// }


// let tag = "<a>";
// let action = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.  "
// let attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//     {titleOfAttr: 'name    ', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
// ]

// let name = new Constructor (tag, action, attrs)
// console.log(name)

// function Div(title, action, attrs) {
//     this.title = title
//     this.action = action
//     this.attrs = attrs
// }

// let tag1 = "<div>"
// let actions = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей."
// let atttribue = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ]

// let divka = new Div(tag1,actions,atttribue) 
// console.log(divka)



// function H1(title, action, attrs) {
//     this.title = title
//     this.action = action
//     this.attrs = attrs
// }

// let teeg = "<h1>"
// let act = "aHTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным."
// let attribute = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание заголовка'},
//     {titleOfAttr: 'title', actionOfAttr: 'Описывает содержимое элемента в виде всплывающей подсказки'},

// ]

// let h1 = new H1(teeg, act, attribute)
// console.log(h1)


// function Span(title, acction, attrs) {
//     this.title = title
//     this.acction = acction
//     this.attrs = attrs
// };


// let teg3 = "<span>";
// let action3 = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.";
// let attrs3 = [
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
// ];

// let SPAN = new Span(teg3,action3,attrs3);
// console.log(SPAN);

// function input(title, acction, attrs) {
//     this.title = title
//     this.acction = acction
//     this.attrs = attrs
// };


// let teg4 = "<input>";
// let action4 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let attrs4 = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'},
// ];

// let inputs = new input(teg4,action4,attrs4);
// console.log(inputs);


// function form(title, acction, attrs) {
//     this.title = title
//     this.acction = acction
//     this.attrs = attrs
// };


// let teg5 = "<form>";
// let action5 = "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.";
// let attrs5 = [
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы.'},
//     {titleOfAttr: 'action', actionOfAttr: 'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер.'},
//     {titleOfAttr: 'method', actionOfAttr: 'Атрибут method сообщает серверу о методе запроса.'},
// ];

// let formu = new form(teg5,action5,attrs5);
// console.log(formu);

// function option(title, acction, attrs) {
//     this.title = title
//     this.acction = acction
//     this.attrs = attrs
// };


// let teg6 = "<option>";
// let action6 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ";
// let attrs6 = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'},
// ];

// let options = new option(teg6,action6,attrs6);
// console.log(options);

// function select(title, acction, attrs) {
//     this.title = title
//     this.acction = acction
//     this.attrs = attrs
// };


// let teg7 = "<select>";
// let action7 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.";
// let attrs7 = [
//     {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка'},
//     {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'},
// ];

// let selects = new select(teg7,action7,attrs7);
// console.log(selects);


// class TagA{
//     constructor(title,action,attrs){
//         this.title = title
//         this.action = action
//         this.attrs = attrs
//     }
// }


// let tag8 = "<a>";
// let action8 = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.  "
// let attrs8 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//     {titleOfAttr: 'name    ', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
// ]

// let classtag1 = new TagA(tag8,action8,attrs8);
// console.log(classtag1);

// class Divvka{
//     constructor (title,action,attrs){
//         this.title = title
//         this.action = action
//         this.attrs = attrs
//     }
// }

// let tag9 = "<div>"
// let actions9 = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей."
// let atttribue9 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ]

// let divkaa = new Divvka(tag9,actions9,atttribue9) 
// console.log(divkaa)



// class TagH1 {
//     Constructor(title,action,attrs) {
//         this.title = title
//         this.action = action
//         this.attrs = attrs
//     }
// }

// let tag10 = "<h1>"
// let act10 = "aHTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным."
// let attribute10 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание заголовка'},
//     {titleOfAttr: 'title', actionOfAttr: 'Описывает содержимое элемента в виде всплывающей подсказки'},

// ]

// let newtagh1 = new TagH1(tag10, act10, attribute10)
// console.log(newtagh1)


// class TagSpan {
//     constructor(title,action,attrs){
//         this.title = title
//         this.action = action
//         this.attrs = attrs
//     }
// }


// let teg11 = "<span>";
// let action11 = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.";
// let attrs11 = [
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
// ];

// let classspan = new Span(teg11,action11,attrs11);
// console.log(classspan);

// class TagInput{
//     constructor(title,action,attrs){
//         this.title = title
//         this.action = action
//         this.attrs = attrs
//     }
// }


// let teg12 = "<input>";
// let action12 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let attrs12 = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'},
// ];

// let classinputs = new TagInput(teg12,action12,attrs12);
// console.log(classinputs);


// class TagForm{
//     constructor(title,action,attrs){
//         this.title = title
//         this.action = action
//         this.attrs = attrs
//     }
// }


// let teg13 = "<form>";
// let action13 = "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.";
// let attrs13 = [
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы.'},
//     {titleOfAttr: 'action', actionOfAttr: 'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер.'},
//     {titleOfAttr: 'method', actionOfAttr: 'Атрибут method сообщает серверу о методе запроса.'},
// ];

// let clasformu = new TagForm(teg13,action13,attrs13);
// console.log(clasformu);

// class TagOption {
//     constructor(tite,action,attrs) {
//         this.title = tite
//         this.action = action
//         this.attrs = attrs 
//     }
// }

// let teg14 = "<option>";
// let action14 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ";
// let attrs14 = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'},
// ];

// let classoptions = new option(teg14,action14,attrs14);
// console.log(classoptions);


// class TagSelect {
//     constructor(title,action,attrs){
//         this.title = title
//         this.action =action
//         this.attrs = attrs
//     }
// }
// let  title15 = "<select>"
// let  action15 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее."
// let  attrs15 = [ {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка'},
// {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'},]

// let tagclassselect = new TagSelect(title15,action15,attrs15)
// console.log(tagclassselect)



// Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     Model: "Lancer x",
//     Brand: "Mitsubishi",
//     Staryear: "2007",
//     Maxspeed: 190,
//     Power: "1.6",
//     driver: function () {
//         console.log(`їдемо зі швидкістю ${this.Maxspeed} на годину`)
//     },
//     info: function () {
//         if(this.newdriver){
//             console.log(`
//             model: ${this.Model},
//             Brand: ${this.Brand},
//             Staryer: ${this.Staryear},
//             Maxspeed: ${this.Maxspeed},
//             Power: ${this.Power}
//             Driver: ${this.newdriver.name}
//             `)
//         } else {
//             console.log(`
//             model: ${this.Model},
//             Brand: ${this.Brand},
//             Staryer: ${this.Staryear},
//             Maxspeed: ${this.Maxspeed},
//             Power: ${this.Power}
//             `)
//         }
//     },
//     increaseMaxSpeed: function(newspeed) {
//         this.Maxspeed += newspeed
//     },
//     changeYear: function (newvalue) {
//         this.Staryear = newvalue
//     },
//     addDriver: function (driver) {
//         this.newdriver = driver
//     }
// }

// let drivers = {name: "Oleg Kaban Ivanovich", age: "22", status: true}

// car.info()
// car.increaseMaxSpeed(15)
// car.changeYear(2020)
// car.addDriver(drivers)
// car.driver()
// car.info()


// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Salon (Model,Brand,Staryear,Maxspeed,Power,driver) {
//     this.Model = Model || "Lancer x";
//     this.Brand = Brand || "Mitsubishi";
//     this.Staryear = Staryear|| 2007;
//     this.Maxspeed = Maxspeed || 190;
//     this.Power = Power ||1.6;
//     this.driver = driver || function () {
//         console.log(`їдемо зі швидкістю ${this.Maxspeed} на годину`)
//     };
//     this.info = function () {
//         if(this.newdriver){
//             console.log(`
//             model: ${this.Model},
//             Brand: ${this.Brand},
//             Staryer: ${this.Staryear},
//             Maxspeed: ${this.Maxspeed},
//             Power: ${this.Power}
//             Driver: ${this.newdriver.name}
//             `)
//         } else {
//             console.log(`
//             model: ${this.Model},
//             Brand: ${this.Brand},
//             Staryer: ${this.Staryear},
//             Maxspeed: ${this.Maxspeed},
//             Power: ${this.Power}
//             `)
//         };
//     };
//     this.increaseMaxSpeed = function(newspeed) {
//         this.Maxspeed += newspeed
//     };
//     this.changeYear = function (newvalue) {
//         this.Staryear = newvalue
//     };
//     this.addDriver = function (driver) {
//         this.newdriver = driver
//     };
// };
    
// let drivers = {name: "Oleg Kaban Ivanovich", age: "22", status: true}

// let car = new Salon("A5","Audio",2007,220,2.0);

// car.increaseMaxSpeed(40)
// car.changeYear(2020)
// car.addDriver(drivers)
// car.info()
// car.driver()




// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class car {
//    constructor(Model,Brand,Staryear,Maxspeed,Power,driver){
//        this.Model = Model || "626";
//        this.Brand = Brand || "Mazda";
//        this.Staryear = Staryear|| 1997;
//        this.Maxspeed = Maxspeed || 180;
//        this.Power = Power ||1.8;
//        };
//        driver(){
//         console.log(`їдемо зі швидкістю ${this.Maxspeed} на годину`)
//        };

//        info() {
//                 if(this.newdriver){
//                     console.log(`
//                     model: ${this.Model},
//                     Brand: ${this.Brand},
//                     Staryer: ${this.Staryear},
//                     Maxspeed: ${this.Maxspeed},
//                     Power: ${this.Power}
//                     Driver: ${this.newdriver.name}
//                     `)
//                 } else {
//                     console.log(`
//                     model: ${this.Model},
//                     Brand: ${this.Brand},
//                     Staryer: ${this.Staryear},
//                     Maxspeed: ${this.Maxspeed},
//                     Power: ${this.Power}
//                     `)
//                 };
//             };

//             increaseMaxSpeed(newspeed){
//                 this.Maxspeed += newspeed
//             };
//             changeYear(newvalue){
//                 this.Staryear = newvalue
//             };
//             addDriver(driver){
//                 this.newdriver = driver
//             };
// };


// let drivers = {name: "Oleg Kaban Ivanovich", age: "22", status: true}
    
// let upcar = new car("A5","Audio",2007,220,2.0);
    
// upcar.increaseMaxSpeed(40)
// upcar.changeYear(2020)
// upcar.addDriver(drivers)
// upcar.info()
// upcar.driver()
    


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka {
//     constructor(name,age,footsize){    
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// };

// let popelushka = new Popelushka("Irina",18,35);
// let popelushka1 = new Popelushka("Anna",25,38);
// let popelushka2 = new Popelushka("Julia",21,37);
// let popelushka3 = new Popelushka("Veronica",18,37);
// let popelushka4 = new Popelushka("Helga",23,38);
// let popelushka5 = new Popelushka("Natalya",20,39);
// let popelushka6 = new Popelushka("Ella",19,36);
// let popelushka7 = new Popelushka("Emma",22,35.5);
// let popelushka8 = new Popelushka("Karina",16,34);
// let popelushka9 = new Popelushka("Olga",18,37.5);
// let popelushka10 = new Popelushka("Zoya",24,36.5);

// let candudatku = [popelushka, popelushka2, popelushka3,popelushka4,popelushka5,popelushka6,
//     popelushka7,popelushka8,popelushka9,popelushka10];


//     class Prince {
//         constructor(name,age,shoes){
//             this.name = name;
//             this.age = age;
//             this.shoes = shoes;
//         }



//         search(girls) {
//             for(const size of girls){
//               if(size.footsize === this.shoes){
//                   console.log(`${this.name} and ${size.name} congratulation`)
//                   break;
//               };
//             };
//         };
//     }

// let George = new Prince("George",20,36);

// George.search(candudatku);
    


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Popelushka(name,age,footsize) {
//     this.name = name;
//     this.age = age;
//     this.footsize = footsize;
// };

// let popelushka = new Popelushka("Irina",18,35);
// let popelushka1 = new Popelushka("Anna",25,38);
// let popelushka2 = new Popelushka("Julia",21,37);
// let popelushka3 = new Popelushka("Veronica",18,37);
// let popelushka4 = new Popelushka("Helga",23,38);
// let popelushka5 = new Popelushka("Natalya",20,39);
// let popelushka6 = new Popelushka("Ella",19,36);
// let popelushka7 = new Popelushka("Emma",22,35.5);
// let popelushka8 = new Popelushka("Karina",16,34);
// let popelushka9 = new Popelushka("Olga",18,37.5);
// let popelushka10 = new Popelushka("Zoya",24,36.5);

// let candudatku = [popelushka, popelushka2, popelushka3,popelushka4,popelushka5,popelushka6,
//     popelushka7,popelushka8,popelushka9,popelushka10];


//     function Prince(name,age,shoes) {
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;


//         this.search = function(girls) {
//             for(const size of girls){
//               if(size.footsize === this.shoes){
//                   console.log(`${this.name} and ${size.name} congratulation`)
//                   break;
//               };
//             };
//         };
//     }

// let George = new Prince("George",20,36);

// George.search(candudatku);
