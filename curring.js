// -- currying is a technique of evaluting function with multiple argument
// into sequence of function with single argument

// function sum(a){
//     return function sum(b){
//         return function sum(c){
//             console.log(a+b+c)
//         }
//     }

// }

const sum= (a)=>(b)=>(c)=>console.log(a+b+c)    //shortcut fat arrow function



sum(5)(5)(5)