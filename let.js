// let b=10;
// let b=50;
// console.log(b)

// ---- var is function scope and let & const is block scope

function aaa(qqq){
    if(qqq){
        var x=10
        console.log(x)
    }
    console.log(x)
}
aaa(true)