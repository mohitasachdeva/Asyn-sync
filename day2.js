
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
        //reject("no rollnum");
    }, 2000);

})
let getdata=(indexnumber)=>{
    return new promise((resolve,reject)=>{
        setTimeout((indexnumber) => {

            let data={
                name : "mohita",
                age : 29
            }
            resolve(data.name +data.age)
        },2000,indexnumber);
    })

    
}
    

promise.then((mesage)=>{
    console.log("rollnumber is exist")
    getdata(rollnum[1]).then((value)=>{
        console.log("exist")
    })
})
promise.catch((mesage)=>{
    console.log(" rollnumber not exist")
})

// await/async:-function always return promise . the keyword await makes js wait until primise settle and return the result .
//ex 1
let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();
//ex2
function method1() {
    let promise1 = new Promise((resolve, reject) => resolve("Hello"));
    let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(" how r u");
      }, 1000);
    });
    let combined_promise = Promise.all([promise1, promise2]);
    return combined_promise;
  }
   
  async function display() {
    let data = await method1();
    console.log(data);
  }
   
  display();

  //ex3
  function m2(){
  let xy= new Promise((resolve,reject) => {

  
        let a = 10;
        let b = 20;
        let c = a+b;
        if(c==30){
            resolve("correct answer")
        }
        else{
            reject("wrong answer")
        }
    
    
  });
}
      
      async function m1(){
        let x = await m2;
        console.log(x)
        console.log("data")

      }
    
 m1();
      