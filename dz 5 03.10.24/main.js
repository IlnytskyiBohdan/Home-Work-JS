//  DZ 5.1

for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

for (let i = 20; i <= 30; i += 0.5) {
  setTimeout(() => {
    console.log(i);
  }, (i - 20) * 2000); // Задержка увеличивается на 2 секунды для каждого шага
}

// let i = 20;

// while(i <= 30){
//   console.log(i);
//   i += 0.5;
// }

// let i = 20;

// do{
//   console.log(i);
//   i += 0.5;
// } while (i <=30);

//  DZ 5.2

const rate = 41;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let uah = dollars * rate;
  console.log(`${dollars} доларів = ${uah} гривень`);
}

// const rate = 41;

// let dollars = 10;

// while (dollars <= 100) {
//   let uah = dollars * rate;
//   console.log(`${dollars} доларів = ${uah} гривень`);
//   dollars += 10;
// }

// const rate = 41;

// let dollars = 10;

// do {
//   let uah = dollars * rate;
//   console.log(`${dollars} доларів = ${uah} гривень`);
//   dollars += 10;
// } while (dollars <= 100);

// //  DZ 5.3

let num = +prompt("Введіть ціле число");

for (let i = 1; i <= 100; i++) {
  if (i * i <= num) {
    console.log(i);
  }
}

// let num = +prompt("Введіть ціле число");

// i = 1;

// while (i <= 100) {
//   if (i * i <= num) {
//     console.log(i);
//   }
//   i++;
// }

// let num = +prompt("Введіть ціле число");

// i = 1;

// do{
//   if (i * i <= num) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100)

// //  DZ 5.4

let n = +prompt("Введіть ціле число:");

if (n <= 1) {
  console.log(`${n} не є простим числом.`);
} else {
  let prime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(`${n} є простим числом.`);
  } else {
    console.log(`${n} не є простим числом.`);
  }
}

// let n = +prompt("Введіть ціле число:");

// if (n <= 1) {
//   console.log(`${n} не є простим числом.`);
// } else {
//   let prime = true;
//   let i = 2;
//   while (i < n) {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//     i++;
//   }

//   if (prime) {
//     console.log(`${n} є простим числом.`);
//   } else {
//     console.log(`${n} не є простим числом.`);
//   }
// }

// let n = +prompt("Введіть ціле число:");

// if (n <= 1) {
//   console.log(`${n} не є простим числом.`);
// } else {
//   let prime = true;
//   let i = 2;
//   do {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//     i++;
//   } while (i < n);

//   if (prime) {
//     console.log(`${n} є простим числом.`);
//   } else {
//     console.log(`${n} не є простим числом.`);
//   }
// }
