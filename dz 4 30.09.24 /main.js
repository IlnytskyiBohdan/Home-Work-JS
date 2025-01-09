//  DZ 4.1

const name = prompt("ім'я користувача:");
const firstLetter = name.charAt(0).toUpperCase();

alert(`Hello, ${firstLetter}${name.slice(1)}! How are you?`);

//  DZ 4.2

const number = prompt("Введіть тризначне число:").trim();

if (number.length === 3 && !isNaN(+number) && !number.includes(" ")) {
  const firstDigit = +number[0];
  const secondDigit = +number[1];
  const thirdDigit = +number[2];

  let result = "";

  if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    result = "Всі цифри однакові.";
  } else if (
    firstDigit === secondDigit ||
    secondDigit === thirdDigit ||
    firstDigit === thirdDigit
  ) {
    result = "Цифри не всі однакові.\nCеред них є 2 однакові.";
  } else {
    result = "Серед цифр немає однакових.";
  }

  alert(result);
} else {
  alert("Введено некоректне число. Переконайтеся, що це тризначне число.");
}

//    DZ 4.3

const yearOfBirth = prompt("Введіть свій рік народження:");
let ageMessage = "";

if (
  yearOfBirth === null ||
  yearOfBirth.trim() === "" ||
  isNaN(+yearOfBirth) ||
  new Date().getFullYear() - +yearOfBirth < 5 ||
  new Date().getFullYear() - +yearOfBirth > 250
) {
  alert(
    "Шкода, що Ви не захотіли ввести свій рік народження або введено некоректне значення."
  );
} else {
  const age = new Date().getFullYear() - +yearOfBirth;
  ageMessage = `Ваш вік: ${age} років.`;
}

const city = prompt("В якому місті Ви живете?");
let cityMessage = "";

if (city !== null && city.trim() !== "" && !/\d/.test(city)) {
  if (city.toLowerCase() === "київ") {
    cityMessage = "Ти живеш у столиці України.";
  } else if (city.toLowerCase() === "вашингтон") {
    cityMessage = "Ти живеш у столиці США.";
  } else if (city.toLowerCase() === "лондон") {
    cityMessage = "Ти живеш у столиці Великобританії.";
  } else {
    cityMessage = `Ти живеш у місті ${
      city.charAt(0).toUpperCase() + city.slice(1)
    }.`;
  }
} else {
  alert(
    "Шкода, що Ви не захотіли ввести своє місто або введено некоректне значення (місто не повинно містити цифр)."
  );
}

const sport = prompt("Який Ваш улюблений вид спорту?");
let sportMessage = "";

if (sport !== null && sport.trim() !== "" && !/\d/.test(sport)) {
  if (sport.toLowerCase() === "футбол") {
    sportMessage = "Круто! Хочеш стати Ліонелем Мессі?";
  } else if (sport.toLowerCase() === "баскетбол") {
    sportMessage = "Круто! Хочеш стати Майклом Джорданом?";
  } else if (sport.toLowerCase() === "скейтбординг") {
    sportMessage = "Круто! Хочеш стати Тоні Хоуком?";
  } else {
    sportMessage = `Круто! Твій улюблений вид спорту - ${
      sport.charAt(0).toUpperCase() + sport.slice(1)
    }.`;
  }
} else {
  alert(
    "Шкода, що Ви не захотіли ввести свій улюблений вид спорту або введено некоректне значення (вид спорту не повинен містити цифр)."
  );
}

let finalMessage = "";
if (ageMessage) finalMessage += `${ageMessage}\n`;
if (cityMessage) finalMessage += `${cityMessage}\n`;
if (sportMessage) finalMessage += `${sportMessage}`;

if (finalMessage) {
  alert(finalMessage);
}

//    DZ 4.4

let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log("ви скасували");
    break;

  case numOrStr.trim() === "":
    console.log("Empty String");
    break;

  case isNaN(+numOrStr):
    console.log("number is Ba_NaN");
    break;

  default:
    console.log("OK!");
    break;
}






