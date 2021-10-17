// function are first class citigen in javascripts
// that mean

// A function which get pass as an argument to another function 
// is known as call back funtion.the call back function very powerfull,
// it gives it access to the whole asyncronus world in a sycronus
// single thread langauge. 

setTimeout(() => {
    console.log("callback")
}, 2000);

function x(y){
    console.log("x")
    y()
}
x(function y(){
    console.log("y")
})


// function a(){
//     c()
    
//     function c(){
//         d()
//         function d(){
//             console.log(b)
//         }
//     }
// }
// const  b=10
// a()



