// //how to print something
// console.log("Hello world")
// // if you want to provide the warning
// console.warn("the output is not proper")
// //report and error
// console.error("Enter correct mobile Number")

// i want to create a alert in java script
// simple alert which provide you OK button
// alert("hello world")
// // this is an alert with ok and cancel button
// confirm("hi")

//by default cypress automatically handles pop-up
// we don't use alert or we don't use confirm.


//var let const ? why do we use these things?
// var is a variable where you can pass multiple values. in multiple instance, i can redeclare the same var with different value
//let i cannot redeclare the same variable again
// const if you want to fix the value and you don't want to change the value then you go for const


// 

//const once the value is defined you cannot change the value oof the const it is fixed
//const responce = 20

// var a = 10
// a++
// console.log(a)
// // redeclaration of same variable is not possible in let 
// let c = 30

// c++
// console.log(c)
// const b= 20

// console.log(b)

// var firstname = "Gaurav"
// var lastname = "Sharma"
// // i want to print my full name so we se concatination.

// var fullname = firstname + " " +  lastname
// console.log(fullname)

// arthimatic operator
// let a = 20
// let b = 10
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// let a = 10
// a++
// console.log(a)
// ++a
// console.log(a)


// let b = 20
// --b
// b--
// console.log(b)

// assignment operator

// let a = 2
// // a+=10
// // a-=10
// // double star is for power in javaScript
// a/=5
// console.log(a)
// a%=5
// console.log(a)

// Relational operator
//this will only capture the value and comapre the value it is not looking at the datattype
// let b=10
// Acc value of C=67
// Acc value for A = 65
// Acc value for B = 66

// let a = "Dog"
// let b = "Cat"
// // === it check the both value and data type and == to check only the value
// // let output = a == b
// // console.log(output)
// // let outputTw = a === b
// // console.log(outputTwo)
// let output = a > b
// console.log(output)



// let a = "A"
// let b = 10
// //let output = a > b
// //let output1 = a < b
// let output2 = a !== b
// console.log(output2)

// let name1 = "Gaurav"
// // i want to use assignment operator to add last name sharma
//  name1 +=  " " + "sharma";

// console.log(name1);



// let x = 5+5;
// console.log(x);


// let y = "5" + 5 // when we add a string and a number the output we will get in the form of String

// console.log(y);
// console.log(typeof (y));  // the datatype of this will always be String

// synchronous
// let testcase1 = function(){
//     console.log("This is the TestCase 1")
//     //alert("hi mates")
//     console.log("End1")
// }

// let testcase2 = function(){
//     console.log("This is TestCase2 ")
    
//     console.log("End2")

//     }

//     testcase1()
//     testcase2()

    //cypress is synchronous if it contains only cypress commands
    //if in between cypresss if you add javaScript commands will be asynchronous
   // so based on the question asked when my cypress takes time toidentify the element and in my code i have javascript
// if it takes time to identify the element by the time it will go and execute javascript command

// i want to click on an element →> output some name to me
//i capture that name i print that name using console.log -> try t print the name without clicking on element
//so you should be very carefull when using javascript in cypress
// you write all the code in cypress commands by skiping javascript as a

// let testcase3 = function(){
//     //wait in javascript is setTimeout
//     setTimeout(function(){
//     console.log("This is the TestCase 1")
//     //alert("hi mates")
//     console.log("End1")
// },3000)
// }

// let testcase4 = function(){
//     console.log("This is TestCase2 ")
    
//     console.log("End2")

//     }

//     testcase3()
//     testcase4()

//logical operator

// let a = 10
// let b = 10
// console.log(a<10 && b>0)
// console.log(a<=10 || b>11)


//write a program 
//total marks  and the average
// let selenium = 50
// let functional = 100
// let API = 75
// let appium = 80

// // Calculate totalMarks
// let totalMarks = selenium + functional + API + appium
// console.log("Total marks:", totalMarks)
// // Calculate average
// let average = totalMarks / 4


// console.log("Average:", average)

// let promise = new Promise((resolve, reject)=>{
//     let a = 1+1
//     if(a==2){
//         resolve("success")
//     }else{
//         reject("failure")
//     }

// })
// promise.then((message)=> {
// console.log(message)

// }).catch((message2)=>{
//     console.log(message2)
// })


let arr = [10,20,30,40,50]
// console.log(arr[1])
// console.log(arr[2])
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i])
// }

// javascript we have something called each (iterator)

// arr.forEach((arr,index) => {
//     console.log(`Index: ${index}, value: ${arr}`);
//   })

arr.forEach((arr, index)=> {
    console.log('value: ' + arr, 'index: ' + index)
})
















