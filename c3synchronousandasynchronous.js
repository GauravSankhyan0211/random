// function sync(){
//     console.log("Hi mates")
//     console.log("How are you all doing?")
//     console.log("what are the plan for the evening?")
// }
//  sync();


// function async(){
//     console.log("start async function")
//     setTimeout(() =>{
    
//     console.log("what are the plan for the evening?")
//     }, 2000);
//     console.log("end of async function")
// }
// async();


// function time(){
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000); 
//     }
    
// }
// time()





function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


const inputString = "aeiou";
const vowelCount = countVowels(inputString);
console.log(vowelCount);




function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    
    return true;
}
const inputNumber = 17;
const result = isPrime(inputNumber);
console.log(inputNumber + " is prime");