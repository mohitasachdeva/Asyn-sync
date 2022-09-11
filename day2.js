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