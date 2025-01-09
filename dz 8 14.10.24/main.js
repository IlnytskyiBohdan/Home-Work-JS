//  DZ 8.1

const ladder = {
  step: 0,

  up: function () {
    this.step++;
    return this;
  },

  down: function () {
    this.step--;
    return this;
  },

  showStep: function () {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();

// function UserCalculator(number = +prompt("Please enter a number", "6")) {
//   this.value = number;
//   this.isError = this.value < 0;

//   this.getSumOfNumber = function (sumValue = this.value) {
//     if (this.isError) return "Error!";
//     if (sumValue === 0) return 0;

//     return sumValue + this.getSumOfNumber(sumValue - 1);
//   };

//   this.getFactorial = function (factValue = this.value) {
//     if (this.isError) return "Error!";
//     if (factValue === 0) return 1;

//     return factValue * this.getFactorial(factValue - 1);
//   };

//   this.getPowerOfNumber = function (exp, baseValue = this.value) {
//     if (this.isError) return "Error!";
//     if (exp === 0) return 1;

//     return baseValue * this.getPowerOfNumber(exp - 1, baseValue);
//   };

//   this.getFibonacci = function (fibValue = this.value) {
//     if (this.isError) return "Error!";
//     if (fibValue === 0) return 0;
//     if (fibValue === 1) return 1;

//     return this.getFibonacci(fibValue - 1) + this.getFibonacci(fibValue - 2);
//   };
// }

// const userCalculatorWorker = new UserCalculator();

// console.log(userCalculatorWorker.getSumOfNumber());
// console.log(userCalculatorWorker.getFactorial());
// console.log(userCalculatorWorker.getPowerOfNumber(2));
// console.log(userCalculatorWorker.getFibonacci());
