//Створюємо 5 об'єктів з різними типами даних
console.log('Створюємо 5 обєктів з різними типами даних');
let obj1 = {
	name: 'John',
	age: 25,
	hobbies: ['reading', 'cooking']
}

let obj2 = {
	brand: 'Apple',
	price: 999,
	isAvailable: false
}

let obj3 = {
	city: 'New York',
	population: 8000000,
	landmarks: ['Statue of Liberty', 'Empire State Building']
}

let obj4 = {
	employeeID: 1234,
	salary: 50000,
	isFullTime: true
}

let obj5 = {
	name: 'Alice',
	gender: 'female',
	address: {
		street: '123 Main St',
		city: 'Los Angeles',
		zip: '90001'
	}}

	  console.log(obj1);
		console.log('-');
		console.log(obj2)
		console.log('-')
	  console.log(obj3)
		console.log('-')
		console.log(obj4)
		console.log('-')
		console.log(obj5)
		console.log('-')
    console.log('-')
		console.log('-')

//Додаємо нові та змінюємо існуючі значення в створених об’єктах
console.log('Додаємо нові та змінюємо існуючі значення в створених об’єктах')
console.log(obj1);
obj1.email = 'john@gmail.com'
console.log(obj1)
console.log('-');
console.log(obj2);
obj2.price = 1099
console.log(obj2)
console.log('-')



//Використовуємо if…else для зміни
console.log('Використовуємо if…else для зміни')
console.log(obj5);
if (obj5.gender === 'female') {
	obj5.isFemale = true
} else {
	obj5.isFemale = false
}
console.log('-')
console.log(obj5)
console.log('-')
console.log('-')
console.log('-')




//Використовуємо switch…case для виведення дня тижня
console.log('Використовуємо switch…case для виведення дня тижня')
let dayNumber = 3;
let dayName
switch (dayNumber) {
	case 1:
		dayName = 'Понеділок'
		break
	case 2:
		dayName = 'Вівторок'
		break
	case 3:
		dayName = 'Середа'
		break
	case 4:
		dayName = 'Четвер'
		break
	case 5:
		dayName = "П'ятниця"
		break
	case 6:
		dayName = 'Субота'
		break
	case 7:
		dayName = 'Неділя'
		break
	default:
		dayName = 'Помилка'
}
console.log(dayName);
console.log('-')
console.log('-')
console.log('-')


//Використати методи для роботи з об’єктами: .assign(), .freeze(), .keys(), .entries()
console.log('Використати методи для роботи з об’єктами: .assign(), .freeze(), .keys(), .entries()'
)
console.log('freeze');
Object.freeze(obj3)
console.log(obj3)
obj3.city = 'Lviv'
console.log(obj3)
console.log('-');

console.log('assign')
console.log(obj1);
console.log(obj2)
let mergedObj = Object.assign({}, obj1, obj2)
console.log( mergedObj)
console.log('-')

console.log('keys')
let keysObj4 = Object.keys(obj4)
console.log(obj4);
console.log( keysObj4)
console.log('-')

console.log('entries')
console.log(obj5)
let entriesObj5 = Object.entries(obj5)
console.log(entriesObj5)

