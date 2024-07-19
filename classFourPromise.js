// promise in javascript is a promise of code execution
// the code either fails or executes

// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
// console.log("promise is fulfilled");
// //resolve(true);
// reject(new Error("we gave 2 second delay"))
//     }, 2000)
// })
// console.log(pro);
// pro.catch((error)=>{
//     console.log("code is not executing")
// })

// const a = setTimeout(()=> {
//     console.log("wait for 2 second")
// }, 3000);
// clearTimeout(a);

let pro = new Promise((resolve, reject) => {
    let status = false;
    //assume the sandwich available 
    if(status){
        resolve();
        console.log("sandwich is available")
    }else{
        reject();
        console.log("sandwich is not available")
    }
})

 pro.catch((error)=>{
     console.log("code is rejected")
 })

