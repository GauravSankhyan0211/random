//  callback is pasing one function into another function
// let a = 20;
// let b = 10;
// calculate(a,b)
// function calculate(i, j){
// add(a,b),
// sub(a,b),
// multi(a,b),
// div(a,b) 
// }
// function add(){
// console.log(a+b)
// }
// function sub(){
//     console.log(a-b)
// }
// function multi(){
//     console.log(a*b)
// }
// function div(){
//     console.log(a/b)
// }




let math = 65
let science = 60
let hindi = 70
let english = 70
let social = 60

let totalNum = math + science + hindi + english + social;

let maxMarks = 500

let percentages = (totalNum / maxMarks) * 100;

console.log(percentages)


// Question 2 

if((math >= 35 || physics >= 35 || chemistry >= 35) && percentages <= 40){
    console.log("Fail");
}
else{
    console.log("Pass");
}


function getDayOfWeek(number) {
    let day;

    switch(number) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid input";
            break;
    }

    return day;
}

console.log(getDayOfWeek(3)); 
// console.log(getDayOfWeek(6)); 
// console.log(getDayOfWeek(8)); 










