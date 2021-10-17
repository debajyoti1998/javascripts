// laxical env is created whenever the excecution context is created

// lexical env is the local memory along with laxical env of its parent
// what is laxical....
// laxical is the term mean in herarky or in a secuence 

function a(){
    var b=10;
    c()
    function c(){
        console.log(b) 
         // c function is laxically setting/inside a function
        // that is laxically in order in herar key.. this function c physically 
        // inside function a. that mean c is laxically inside a 
        // and a is laxically inside the global scope
    }
    
}
a()


// function a(){
//     var b=10;
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// a()