// we use funtion in javascript to organize our code
//there are certain ocde blocks that may require repeated copy so we can put different parameters  and by applying fuctions we can get different results

// function average(a, b) {

// return ((a+b) / 2)

// }
// let a = 1;
// let b = 2;
// let c = 3;

// console.log(average(a,b));
// console.log(average(b,c));
// console.log(average(c,a));




function greetPerson(name) {
    return "Hello, " + name + "Welcome!";
}


let personName = "Gaurav";
let greetingMessage = greetPerson(personName);
console.log(greetingMessage);






function checkEvenOrOdd(number) {
    if (number % 2 == 0) {
        return number + " is even.";
    } else {
        return number + " is odd.";
    }
}

console.log(checkEvenOrOdd(7)); 
