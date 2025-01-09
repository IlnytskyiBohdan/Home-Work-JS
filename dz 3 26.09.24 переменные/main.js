//    DZ 3.1

const age = 42;
const bigNumber = 1234567890123456789012345678901234567890n;
const newStr = "Hello world!";
const isLogged = true;
let veriable;
const user = null;
const uniqueID = Symbol('sym');
const person = {
  name: "Богдан",
  age: 25,
};

// тоже относятья к типам данных

const arrayType = ["1", true, 3, {}, []];
const functionType = function () {
  return "function";
};


console.log(age, typeof age);
console.log(bigNumber, typeof bigNumber);
console.log(newStr, typeof newStr);
console.log(isLogged, typeof isLogged);
console.log(veriable, typeof veriable);
console.log(user, typeof user);
console.log(uniqueID, typeof uniqueID);
console.log(person, typeof person);
console.log(arrayType, typeof arrayType);
console.log(functionType, typeof functionType);

//    DZ 3.2 

const lines = [
  prompt("Введите фамилию:"),
  prompt("Введите имя:"),
  prompt("Введите отчество:"),
];
alert(`Пользователь: ${lines[0]} ${lines[1]} ${lines[2]}`); // можно и через .join, оставил для вариативности
// alert(`Пользователь: ${lines.join(" ")}`);

//    DZ 3.3

// const number = "23445:";
const number = prompt("Введите число:"); // сделал 2 варианта, этот мне нравиться больше
const digits = number.split("").join(" ");
alert(`Число по цифрам: ${digits}`);
