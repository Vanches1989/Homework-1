// Задание 1/1
// •	Переменная хранит в себе значение от 0 до 9. Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.

// Первый способ

for (let c = 0; c < 10; c++){

	if (c <= 0) {
		console.log("ноль");
	}
	if (c = 1) {
		console.log("один");
	}
	if (c = 2) {
		console.log("два");
	}
	if (c = 3) {
		console.log("три");
	}
	if (c = 4) {
		console.log("четыре");
	}
	if (c = 5) {
		console.log("пять");
	}
	if (c = 6) {
		console.log("шесть");
	}
	if (c = 7) {
		console.log("семь");
	}
	if (c = 8) {
		console.log("восемь");
	}
	if (c = 9) {
		console.log("девять");
	}
}

// Второй способ

	let a = prompt("Input value:");

	a = Number(a);

	switch (a) {

	case 0:

	console.log("ноль");

	break;

	case 1:

	console.log("один");

	break;

	case 2:

	console.log("два");

	break;

	case 3:

	console.log("три");

	break;

	case 4:

	console.log("четыре");

	break;

	case 5:

	console.log("пять");

	break;

	case 6:

	console.log("шесть");

	break;

	case 7:

	console.log("семь");

	break;

	case 8:

	console.log("восемь");

	break;

	case 9:

	console.log("девять");

	break;

	default:

	console.log("От 0-9 не найдено ");

}

// Задание 1/2 •	Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, что число является нулевым либо положительным либо отрицательным.

let b = 2;

if (b >= 0) {
	console.log("Положительный");
} else {
	console.log("Отрецательный");
}

// Задание 1/3 •	Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число. В зависимости от того какая единица измерения написать скрипт, который выводит количество байт. Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.


let Gb = "Gb";
let Mb = "Mb";
let Kb = "Kb";
let Byte = "Byte";
let j = 3;

switch(Mb){
	case Gb:
	res = j * 1024 * 1024 * 1024;
	break;
	case Mb:
	res = j * 1024 * 1024;
	break;
	case Kb:
	res = j * 1024;
	break;
	case Byte:
	res = j;
	break;
}

console.log(res + " Byte");

// Задание 1/4 •	Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
// •	Сколько процентов заплатит клиент за все время
// •	Сколько процентов заплатит клиент за один календарный год
// •	Какое общее количество денежных средств клиента банка выплатит за все года


let procent = 15;//процент кредита в год
let ob = 100;//объем тела кредита
let time = 5;//длительность кредитного договора в годах
let allTime = 0;
let oneYear = 0;
let allYears = 0;

allTime += procent * time;
console.log(allTime);

oneYear += time / 5 * procent;
console.log(oneYear);

allYears += ob / 100 * procent * time + ob;
console.log(allYears);
