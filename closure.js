// A closure is the combination of function bundled together 
// with refarences to its sarounding state
// ----- in other words a closure gives you access to an outer function's
// scope of an inner function

// In Javascript closure are created every time a function is created, 
// at function creation time
// ---------
// function along with its lexical scope bundle toughter from the closure 
 


// closure is a function bind togauther with it laxical environmantal

function x(){
    let a=10
    function z(){
        console.log(a)
    }
    a=55
    return z
}
let d=x();
d()