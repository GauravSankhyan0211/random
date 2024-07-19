// the await/async keyword is placed before the call to a function or variable that returns a promise
// async function func(){  
// let pro = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("pro is resolved");
//     }, 5000);
// });
// let pro2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("pro2 is resolved");
//     }, 2000);
// });
// let var1 = await pro;
// console.log(var1)
// let var2 = await pro2;
// console.log(var2)
// }
// func();






// const number = 54;
// const maxMultiplier = 10;
// for (let i = 1; i <= maxMultiplier; i++) {
//     console.log(number * i);
// }






// const maxOddNumbers = 10;
// let count = 0;
// for (let number = 1; count < maxOddNumbers; number += 2) {
//     console.log(number);
//     count++;
// }








// for (let i = 0;;i++) {
//     console.log(i);
// }








// class Calculator {
    
//     add(num1, num2) {
//         return num1 + num2;
//     } 
//     subtract(num1, num2) {
//         return num1 - num2;
//     } 
//     multiply(num1, num2) {
//         return num1 * num2;
//     }
//     divide(num1, num2) {
//         if (num2 == 0) {
//             throw new Error("Division by zero is not allowed.");
//         }
//         return num1 / num2;
//     } 
//     modulus(num1, num2) {
//         if (num2 == 0) {
//             throw new Error("Division by zero is not allowed.");
//         }
//         return num1 % num2;
//     }
//     power(base, exponent) {
//         return Math.pow(base, exponent);
//     }
// }

// const calculator = new Calculator();
// const num1 = 4;
// const num2 = 2;
// console.log(calculator.add(num1, num2));
// console.log(calculator.subtract(num1, num2));
// console.log(calculator.multiply(num1, num2));
// console.log(calculator.divide(num1, num2));
// console.log(calculator.modulus(num1, num2));
// console.log(calculator.power(num1, num2));
















async function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(i);
    }
}


printNumbers();
