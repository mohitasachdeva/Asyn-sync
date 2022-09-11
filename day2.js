// synchronous :- it is request blocks the client until operation is complete.browser is unresponsive.
function fun1(){
    console.log(" hello ")
}
function fun(){
    console.log("synchronous java script")
    fun1();
    console.log( "this is ending")
}
fun();
//.....................................................................

//Asynchronous :- it doesnot block the client request.
function show(){
    console.log(" Asynchronus java script")
    setTimeout(() => {
       console.log("after 3 seconds") 
    }, 3000);
}
function display(){
    console.log("learn java script")
    show();
    console.log("i learn java script")
}
display();
// callback :- any function that is passed as an argument is called a call back function 
// example 1.
function f1(friend,callback){
    console.log(`i am busy with ${friend} . i will call you later`)
    callback();
}
function f2(){
    console.log(" hi how r u ")
}
f1("mohita",f2);
//example 2
var a;
var b;
var c;
function sum(a , b , callback){
     c = a+b;
    console.log("sum of numbers ")
    callback();
}
function display(){
    console.log(c)
}
sum(10 , 20 ,display);
//example 3
function sayname(name,callback){
    
    console.log(`hello ${name}. ....` )
    setTimeout(() => {
        console.log(" after 3 sec")
        callback();
    }, 3000);
    console.log(" how r u")
}
function greet(){
    console.log( `i am fine .how r u ` )

}
sayname("mohita",greet);
