function sayHello(nameOfPerson, age){
	console.log('Hello my name is ' + nameOfPerson + "and I'm " + age);
}

sayHello('kihyeong ', 26);
sayHello('dal ', 23);
sayHello('lynn ', 21);

const player = {
	name: "kihyeong",
	sayHello: function (otherPersonName) {
		console.log("hello " + otherPersonName + " nice meet you!");
	}
}

player.sayHello("lynn");
player.sayHello("nico");

function plus(a, b) {
	console.log(a + b);
}

plus(5,5);