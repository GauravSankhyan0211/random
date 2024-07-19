// object is a collection a values generally in object key-value pairs are stored
// key: value
// const a  = {
//     nameone: "Hello mates",
//     age: 23,
//     marks: 90,
//     ispass: true,
//     isfail: false,
   
// };
// console.log(a.nameone)
// console.log(a["nameone"] + 1)

// console.log(typeof a)

//Question1
// const product ={
//     productName : "Auto Hub Microfiber Vehicle Nashing Cloth",
//     rating: 4.2,
//     totalreviews: 1934,
//     verifiedProduct: "Assured",
//     price: 849,
//     discountPrice : 225,
//     discount : "69% off",
//     expecteddelivery: "Free delivery by 24th Feb"

// };
// console.log(product)
// console.log(typeof product)



// //Question2
// const instaProfile = {
//     username: "lofti232",
//     posts : 574,
//     followers : "874K" ,
//     following: 441,
//     name: "Jeongja Seo",
//     creatorType: "Digital Creator",
//     email : "lofti232@ry.mail.com",
//     bio: "BIG BOSS",
//     mutualfriends: "Followed by analog and autonomy",
//     button1: "Follow",
//     button2: "Message",
//     button3: "Email",
//     Followbutton: true,
//     Messagebutton: true,
//     Emailbutton: true,
//     friendsuggestion : true


// }
// console.log(instaProfile)
// console.log(typeof instaProfile)



// a variable that can hold multiple values of similar kind of data type

let fruit = ["Mango","Orange","Banana","Kiwi","Apple"]

//console.log(fruit)
// console.log(fruit[4])
// fruit.push("grapes");
// console.log(fruit)
// fruit.pop();
// console.log(fruit)
// fruit.unshift("Guava");
// console.log(fruit)
// fruit.shift();
// console.log(fruit)
// console.log(fruit.length)
// console.log(fruit.indexOf("Guava"));

for(let i = 0; i<fruit.length; i++){
    console.log(fruit[i]);
}
for(let i = fruit.length - 1; i>= 0; i--){
    console.log(fruit[i]);
}

console.log(fruit.sort());

console.log(fruit.sort().reverse());