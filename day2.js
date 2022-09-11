
//..............................................................
//promise:- promise is used to handle asychronous operations in java script . there are three stages og java script 1. pending 2. resolved 3. reject.
//example 1.
// function display(argument) {
//    console.log(argument)
//   }
  
//   let promise = new Promise(function(resolve, reject) {
//     let x = 0;
//      if (x == 0) {
//       resolve("OK");
//     } else {
//       reject("Error");
//     }
//   });
  
//   promise.then(
//     function(value) {display(value);},
//     function(error) {display(error);}
//   );
  //example2
//    var xyz= new Promise(function(resolve,reject){
//     let a = 10;
//     let b = 20;
//     let c = a+b;
//     if(c==30){
//         resolve("correct answer")
//     }
//     else{
//         reject("wrong answer")
//     }


//   })
//   xyz.then((message)=>{
//     console.log(message)
// })
// xyz.catch((meaage)=> {
//     console.log(message)
// })
//example3 
var promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let rollnum= [1,2,3,4,5];
        resolve(rollnum);
        reject("no rollnum");
    }, 2000);

})
promise.then((mesage)=>{
    console.log("rollnumber is exist")
})
promise.catch((mesage)=>{
    console.log(" rollnumber not exist")
})