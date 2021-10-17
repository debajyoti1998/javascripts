const arr=[1,2,3,4,5]
function xxx(x){
    return x*2
}
const output=arr.map(xxx);
console.log(output)
const output=arr.map((x)=>x.toString(2))
console.log(output)

// filter-----

const arr=[1,2,3,4,5]
function isOdd(x){
    return x %2 ===0
}

const output=arr.filter((x)=> x>=4)
console.log(output)




// --- map complicated example
const users=[
    {firstname:'debajyoti',lastname:"panda",age:23},
    {firstname:"babun",lastname:"panda",age:25},
    {firstname:"shuvajyoti",lastname:"panda",age:28}

]
// const output =users.map((x)=>`${x.firstname} ${x.lastname}`)
// console.log(output)
const output =users.filter((x)=> (x.age>25))
console.log(output)

// const arr=[1,2,3,4,5]
// function binary(x){
//     return x.toString(2)
// }
// const output=arr.map(binary);
// console.log(output)

// map:it is maping each of this value
// filter function basically use to filter this value inside this array

const arr=[1,2,3,4,5]

const arr2=arr.filter((v,index)=>{
    return v>=4
})
console.log(arr2)