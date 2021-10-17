// the event loop is the secret behind javascripts asyschronous programing.
// js executes all operations on a single thread, but using a few 
// smart data structures it give us the illusion  of multi-trading .
// the call stack is responsivs for keeping track all the operation in 
// line to be executed

//  defination=>Event loops handle asynchronous callbacks in Node.js.
//  It is the foundation of the non-blocking input/output in Node.js,
//  making it one of the most important environmental features.


const func1=()=>{
    setTimeout(() => {
        console.log("settimeout called")
        
    }, 2000);
}
const fun2=()=>{
    console.log("first") 
    func1() 
    console.log("end")
}
fun2()
