//  DZ 7.1

function createSum() {
  let total = 0;

  return function (num) {
    total += num;
    return total;
  };
}

const sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

//  DZ 7.2

function multiplyCurry(a) {
  return (b) => {
    return a * b;
  };
}

console.log(multiplyCurry(5)(2));

//  DZ 7.3

function promptForNumber() {
  let number;

  for (let i = 0; i < 10; i++) {
    let input = prompt("Введіть число більше 100:");

    if (isNaN(input) || input === null || input.trim() === "") {
      alert("Ви ввели некоректне значення: " + input);
      return;
    }

    number = +input;

    if (number > 100) {
      alert("Останнє введене число: " + number);
      return; 
    }

    alert("Число повинно бути більше 100. Спробуйте ще раз.");
  }

  alert("Ви досягли максимального кількості спроб. Останнє введене число: " + number);
}

promptForNumber();

// function promptForNumber() {
//   let number;

//   for (let i = 0; i < 10; i++) {
//     number = +prompt("Введіть число більше 100:");

//     if (number > 100) {
//       alert("Останнє введене число: " + number);
//       return;
//     }

//     alert("Спробуй ще! Ти зможеш!");

//     if (i === 9) {
//       alert("Ви досягли максимуму спроб! Останнє введене число: " + number);
//     }
//   }
// }

// promptForNumber();

// function promptForNumber() {
//   let number;
//   let truNumber = false;

//   for (let i = 0; i < 10; i++) {
//     number = +prompt("Введіть число більше 100:");

//     if (number <= 100) {
//       alert("Спробуй ще! Ти зможеш!");
//     } else {
//       truNumber = true;
//       break;
//     }

//     if (i === 9) {
//       alert("Ви досягли максимуму спроб!");
//     }
//   }

//   if (truNumber) {
//     alert("Останнє введене число: " + number);
//   }
// }

// promptForNumber();
