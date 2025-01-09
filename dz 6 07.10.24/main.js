//  DZ 6.1

function removeChars(inputString, chars) {
  for (let char of chars) {
    inputString = inputString.split(char).join("");
  }
  return inputString;
}

let inputString = prompt("Введите строку:");
let chars = prompt("Введите символы для удаления (без пробелов):");

let result = removeChars(inputString, chars);

alert(`Результат: ${result}`);

// DZ 6.2

function averageOfNumbers(arr) {
  let numbers = arr.filter(function (item) {
    return typeof item === "number";
  });

  if (numbers.length === 0) return 0;

  let sum = numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);

  return sum / numbers.length;
}

let elements = [10, "hello", true, 20, undefined, 30];
let average = averageOfNumbers(elements);

console.log(`Среднее арифметическое числовых элементов: ${average}`);

//  DZ 6.2

function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array, 4);

console.log(array);

// примеры вывода чисел с замедлением, первый пример увелисёваем замедление, второй замедление для каддого одинакоае

// for (let i = 20; i <= 30; i += 0.5) {
//   setTimeout(() => {
//     console.log(i);
//   }, (i - 20) * 2000);
// }

// const timer = ms => new Promise(res => setTimeout(res, ms))

// async function load () { for this to work
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//     await timer(1000);
// }

// load();
