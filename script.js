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
	}
}


obj1.email = 'john@gmail.com'
obj2.price = 1099
obj3.population += 100000
obj4.salary *= 1.5 



if (obj5.gender === 'female') {
	obj5.isFemale = true
} else {
	obj5.isFemale = false
}







let dayNumber = 3 
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







 // Отримання масиву масивів [ключ, значення] для об'єкту obj5

Object.freeze(obj3)
console.log(obj3)
obj3.city = 'Lviv'
console.log(obj3)


let mergedObj = Object.assign({}, obj1, obj2)
console.log( mergedObj)


let keysObj4 = Object.keys(obj4)
console.log( keysObj4)

let entriesObj5 = Object.entries(obj5)
console.log(entriesObj5)

