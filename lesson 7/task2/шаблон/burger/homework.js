// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. // (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let object = {
//     Name: "Vasya",
//     Age: 25,
//     hasWife: true,
// };

// let object1 = {
//     Name: "Vera",
//     Age: 29,
//     hasBoyfriend: false,
// };

// let object2 = {
//     Name: "Alena",
//     Age: 18,
//     hasBoyfriend: false,
// };

// let object3 = {
//     Name: "Oleg",
//     Age: 22,
//     hasWife: true,
// };

// let object4 = {
//     Name: "Yuriy",
//     Age: 35,
//     hasWife: false,
// };



// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let man = { name: 'banana', 
// skills : ['java','js'] , 
// wife: { name: 'vanilla' } 
// };

// let wife = { name: 'klara', 
// skills : ['ruby','python'] , 
// boyfriend: { name: 'markus' } 
// };

// let boy = { name: '50 cent', 
// skills : ['c++','java'] , 
// wife: { name: 'Guliana' } 
// };

// let girl = { name: 'tamara', 
// skills : ['qa','qc'] , 
// boyfriend: { name: 'levui' } 
// };

// let men = { name: 'kokos', 
// skills : ['java','js'] , 
// wife: { name: 'apple' } 
// };


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const vuvestu in object) {
//     console.log(vuvestu)
// };

// for (const vuvestu in object1) {
//     console.log(vuvestu)
// };

// for (const vuvestu in object2) {
//     console.log(vuvestu)
// };

// for (const vuvestu in object3) {
//     console.log(vuvestu)
// };

// for (const vuvestu in object4) {
//     console.log(vuvestu)
// };

// for (const vuvestu in man) {
//     console.log(vuvestu)
// };

// for (const vuvestu in wife) {
//     console.log(vuvestu)
// };

// for (const vuvestu in boy) {
//     console.log(vuvestu)
// };

// for (const vuvestu in girl) {
//     console.log(vuvestu)
// };

// for (const vuvestu in men) {
//     console.log(vuvestu)
// };

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(object))

// console.log(Object.keys(object1))

// console.log(Object.keys(object2))

// console.log(Object.keys(object3))

// console.log(Object.keys(object4))

// console.log(Object.keys(man))

// console.log(Object.keys(wife))

// console.log(Object.keys(boy))

// console.log(Object.keys(girl))

// console.log(Object.keys(men))


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

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

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let bestcity2020 = [
//     city=
//     { name: 'New-Yok', population : "11 million" , country: "USA" , state: "New-York"},
//     { name: 'Toronto', population  : "4 million" , country: "CANADA" , state: "nomore"},
//     { name: 'London', population  : "7 million" , country: "Great British" , kings: "moe"},
//     { name: 'Paris', population  : "5 million" , country: "France" , province: "aristocratu"},
//     { name: 'Berlin', population  : "12 million" , country: "Germany" , obl: "anti USSR"},
//     { name: 'Prague', population  : "3 million" , country: "Chezh" , obl: "kaev"},
//     { name: 'Krakow', population  : "2 million" , country: "Poland" , obl: "not bad"},
//     { name: 'Oslo', population  : "1 million" , country: "Norway" , obl: "vikings"},
//     { name: 'Tokyo', population  : "40 million" , country: "Japan" , prefectyra: "sayonara"},
//     { name: 'Los-Angeles', population  : "8 million " , country: "USA" , state: "Califronia"},
// ];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let autoria2 = [
//     cars=
//     { model: 'chevrolet', yearvupysk : "2000" , power: "2.0" , color: "red", driver : {name: "Jackson", Age: 27, sex:"male", stag: 3}},
//     { model: 'ford', yearvupysk : "2020" , power: "1.6" , color: "blue", driver : {name: "Jack", Age: 48, sex:"male", stag: 17}},
//     { model: 'gmc', yearvupysk : "1970" , power: "2.5" , color: "black", driver : {name: "Jackob", Age: 18, sex:"male", stag: 0}},
//     { model: 'yoyota', yearvupysk : "2018" , power: "1.3" , color: "yellow", driver : {name: "Jennifer", Age: 27, sex:"female", stag: 7}},
//     { model: 'mitsubishi', yearvupysk : "2008" , power: "1.8" , color: "white-black", driver : {name: "Joe", Age: 62, sex:"male", stag: 40}},
//     { model: 'dewoo', yearvupysk : "2000" , power: "1.4" , color: "green", driver : {name: "Emmy", Age: 24, sex:"female", stag: 2}},
//     { model: 'lada', yearvupysk : "1988" , power: "0.9" , color: "brown", driver : {name: "Ulia", Age: 38, sex:"female", stag: 5}},
//     { model: 'tesla', yearvupysk : "2019" , power: "0.0" , color: "light-blue", driver : {name: "John", Age: 31, sex:"male", stag: 2}},
//     { model: 'dodge', yearvupysk : "2005" , power: "2.0" , color: "pink", driver : {name: "David", Age: 69, sex:"male", stag: 50}},
//     { model: 'mercedes-benz', yearvupysk : "2010" , power: "1.5" , color: "purple", driver : {name: "Tasha", Age: 34, sex:"female", stag: 14}},
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i<=autoria.length) {
//     const user = autoria[i]
//     i++
//     console.log(user)
// }

// let i = 0;
// while (i<=bestcity2020.length) {
//     const user = bestcity2020 [i]
//     i++
//     console.log(user)
// }

// let i = 0;
// while (i<=autoria2.length) {
//     const user = autoria2[i]
//     i++
//     console.log(user)
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .


// for (i=0; i<=autoria.length; i++) {
//     const user = autoria[i]
//     console.log(user)
// }

// for (i=0; i<=bestcity2020.length; i++) {
//     const user = bestcity2020[i]
//     console.log(user)
// }

// for (i=0; i<=autoria2.length; i++) {
//     const user = autoria2[i]
//     console.log(user)
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const gg of autoria) {
//     console.log(gg)
// }

// for (const gg of bestcity2020) {
//     console.log(gg)
// }

// for (const gg of autoria2) {
//     console.log(gg)
// }

// - взять объекты из задания 1 и превратить каждый в json.


// let jeson = JSON.stringify(object)
// console.log(jeson)

// let jeson1 = JSON.stringify(object1)
// console.log(jeson1)

// let jeson2 = JSON.stringify(object2)
// console.log(jeson2)

// let jeson3 = JSON.stringify(object3)
// console.log(jeson3)

// let jeson4 = JSON.stringify(object4)
// console.log(jeson4)


// - взять json из задания 11 и превратить их обратно в объекты.

// let pars = JSON.parse(jeson)
// console.log(pars)

// let pars1 = JSON.parse(jeson1)
// console.log(jeson)

// let pars2 = JSON.parse(jeson2)
// console.log(pars2)

// let pars3 = JSON.parse(jeson3)
// console.log(pars3)

// let pars4 = JSON.parse(jeson4)
// console.log(pars4)


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

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

// for (i=0; i<=autoria.length; i++) {
//     const pereval = JSON.stringify(autoria[i])
//     console.log(pereval)
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (i=0; i<=bestcity2020.length; i++) {
//     const pereval = JSON.stringify(bestcity2020[i])
//     console.log(pereval)
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// for (i=0; i<=autoria2.length; i++) {
//     const pereval = JSON.stringify(autoria2[i])
//     console.log(pereval)
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills


// let users = [                  {
//                 				name: 'vasya',
//                                 age: 31, 
//                                 skills: ["js", "java"],
//                 				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//                 			}, {
//                 				name: 'petya',
//                                 age: 30, 
//                                 skills: ["js", "java"],
//                 				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//                 			}, {
//                 				name: 'kolya',
//                                 age: 29, 
//                                 skills: ["js", "java"],
//                 				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//                 			}, {
//                 				name: 'olya',
//                                 age: 28, 
//                                 skills: ["js", "java"],
//                 				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//                 			}, {
//                 				name: 'max',
//                                 age: 30, 
//                                 skills: ["js", "java"],
//                 				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//                 			}, {
//                 				name: 'anya',
//                                 age: 31, 
//                                 skills: ["js", "java"],
//                 				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//                 			}]

// for (const user of users) {
//     console.log(user.name);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let skil = []
// for (const user of users) {
//     for (const skill of user.skills) {
//         skil.push(skill)
//     }
// }
// console.log(skil);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{name: 'vasya', age: 31,  status: false, skills: ['java', 'js']}, 
//              {name: 'petya', age: 30,status: true, skills: ['java', 'js', 'html']}, 
//              {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
//              {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//              {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];


// for (const user of users) {
//     console.log(user.name);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }




// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.


            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
                        // }];
                        
// let addressUsers = []
// for (const ad of users) {
// 	addressUsers.push(ad.address)
// }
// console.log(addressUsers)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (i=0; i<=users.length; i++) {
// 	const user = users[i];
// 	const divka = document.createElement("div");
// 	divka.innerText = (`${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`);
// 	document.body.appendChild(divka)
// };

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

	// for (i=0; i<=users.length; i++) {
	// 	const user = users[i];
	// 	const div = document.createElement("div")
	// 	const h = document.createElement("h2")
	// 	const h2 = document.createElement("h3")
	// 	const p = document.createElement("p")
	// 	const b = document.createElement("p")

	// 	h.innerText = user.name;;
	// 	h2.innerText = user.age;
	// 	p.innerText = user.status;
	// 	b.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`

  
	// 	div.appendChild(h)
	// 	div.appendChild(h2)
	// 	div.appendChild(p)
	// 	div.appendChild(b)

	// 	document.body.appendChild(div)
	// }



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

	// for (i=0; i<=users.length; i++) {
	// 	const user = users[i];
	// 	const div = document.createElement("div");
	// 	const name = document.createElement("h2");
	// 	const age = document.createElement("h3");
	// 	const status = document.createElement("p");
	// 	const address = document.createElement("div");

	// 	for (const item in user.address) {
	// 	const t = document.createElement("div");
	// 	t.innerText = user.address[item];
	// 	address.appendChild(t);
	// 	};

	// 	name.innerText = user.name;;
	// 	age.innerText = user.age;
	// 	status.innerText = user.status;
  
	// 	div.appendChild(name);
	// 	div.appendChild(age);
	// 	div.appendChild(status);
	// 	div.appendChild(address);

	// 	document.body.appendChild(div);
	// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
			// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
			//   {id: 2, name: 'petya', age: 30, status: true}, 
			//   {id: 3, name: 'kolya', age: 29, status: true}, 
			//   {id: 4, name: 'olya', age: 28, status: false},];

			// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
			//   {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
			//   {user_id: 2, country: 'Poland', city: 'Krakow'},
			//   {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .

// for (const user of usersWithId) {
// 	for (const from of citiesWithId) {
// 		if (user.id === from.user_id) {
// 			user.address = from
// 		}
// 	}
// }
// console.log(usersWithId )

// Записати цей об'єкт в новий масив
// Частковий приклад реультату

// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let useraddress = [];
// for (const user of usersWithId) {
// 	for (const from of citiesWithId) {
// 		if (user.id === from.user_id) {
// 			user.address = from
// 			useraddress.push(from)
// 		}
// 	}
// }
// console.log(useraddress)


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// const elementById = document.getElementById("content2") ;
// const innetTex = elementById.innerText
// console.log(innetTex)

// const getElementsByClassName = document.getElementsByClassName("rules") ;
// for (const a of getElementsByClassName) {
// 	console.log(a)
// }

// const getElementsByTagNameNS = document.getElementsByTagName("h1") ;
// for (const tag of getElementsByTagNameNS) {
// 	console.log(tag)
// }



// - змінити цей текст використовуючи селектори id, class,  tag

// const elementById = document.getElementById("content2") ;
// const innetTex = elementById.innerText = "hello"
// elementById.innerText = "hello"
// console.log(innetTex)

// const getElementsByClassName = document.getElementsByClassName("rules") ;
// for (const a of getElementsByClassName) {
// 	a.innerText = "okten"
// }

// const getElementsByTagNameNS = document.getElementsByTagName("h1") ;
// for (const tag of getElementsByTagNameNS) {
// 	tag.innerText = "hello okten"
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag


// const elementById = document.getElementById("content2") ;
// elementById.style.width = '200px';
// elementById.style.height = '10px';

// const getElementsByClassName = document.getElementsByClassName("rules") ;
// for (const a of getElementsByClassName) {
// 	a.style.width = '200px';
// 	a.style.height = '150px';
// }

// const getElementsByTagNameNS = document.getElementsByTagName("h1") ;
// for (const tag of getElementsByTagNameNS) {
// 	tag.style.width = '200px';
// 	tag.style.height = '150px';
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement("table"); 
// let tr = document.createElement("tr")
// let td = document.createElement("td")
// let td2 = document.createElement("td")
// let td3 = document.createElement("td")

// tr.appendChild(td)
// tr.appendChild(td2)
// tr.appendChild(td3)

// table.appendChild(tr)

// document.body.appendChild(table)


// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table = document.createElement("table"); 

// let tr1 = document.createElement("tr")
// let tr2 = document.createElement("tr")
// let tr3 = document.createElement("tr")
// let tr4 = document.createElement("tr")
// let tr5 = document.createElement("tr")
// let tr6 = document.createElement("tr")
// let tr7 = document.createElement("tr")
// let tr8 = document.createElement("tr")
// let tr9 = document.createElement("tr")
// let tr10 = document.createElement("tr")

// let td = document.createElement("td")
// let td1 = document.createElement("td")
// let td2 = document.createElement("td")


// tr1.appendChild(td)
// tr1.appendChild(td1)
// tr1.appendChild(td2)

// tr2.appendChild(td)
// tr2.appendChild(td1)
// tr3.appendChild(td2)

// tr3.appendChild(td)
// tr3.appendChild(td1)
// tr3.appendChild(td2)

// tr4.appendChild(td)
// tr4.appendChild(td1)
// tr4.appendChild(td2)


// tr5.appendChild(td)
// tr5.appendChild(td1)
// tr5.appendChild(td2)


// tr6.appendChild(td)
// tr6.appendChild(td1)
// tr6.appendChild(td2)

// tr7.appendChild(td)
// tr7.appendChild(td1)
// tr7.appendChild(td2)

// tr8.appendChild(td)
// tr8.appendChild(td1)
// tr8.appendChild(td2)

// tr9.appendChild(td)
// tr9.appendChild(td1)
// tr9.appendChild(td2)

// tr10.appendChild(td)
// tr10.appendChild(td1)
// tr10.appendChild(td2)


// table.appendChild(tr1)
// table.appendChild(tr2)
// table.appendChild(tr3)
// table.appendChild(tr4)
// table.appendChild(tr5)
// table.appendChild(tr6)
// table.appendChild(tr7)
// table.appendChild(tr8)
// table.appendChild(tr9)
// table.appendChild(tr10)

// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені



// let table = document.createElement("table")

// for (let i=0; i<10; i++) {
//     const tr = document.createElement("tr");
// 		for (let i=0; i<5; i++)  {
// 		   const td = document.createElement("td");
// 			  tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	};
	
// document.body.appendChild(table);



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt


// let promt = prompt("Скільки рядків?")
// let promt1 = prompt("Скільки ячейок?")
// let table = document.createElement("table")

// for (let i=0; i< promt; i++) {
// 	const tr = document.createElement("tr");
// 		for (let i=0; i<promt1; i++)  {
// 		   const td = document.createElement("td");
//            tr.appendChild(td)	
// 		}
// 		table.appendChild(tr);
// 	};
	
// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// let tag = document.getElementsByTagName("*")
// for(let clas of tag) {
// 	if(clas.getAttribute("class")) {
// 		console.log(clas)
// 	}
// }

// let tag = document.getElementsByTagName("p")
// for (let p of tag) {
// 	p.innerText = "hello oktenweb"
// 	}

// let div = document.getElementsByTagName("div")
// for (let tag of div) {
// 	tag.style.background = "red"
// 	}


