// promise in javascripts is represent the process that is already 
// hapening , which can be chanin with call back function . a promise can 
// be setteled if it is either fulfield or reject but not pending


const product=["suger",'tea',"rice"]
function purches(products){
    let promise=new Promise((resolve,reject)=>{
        if (product.includes(products)){
            resolve()
        }
        else{
            reject('product not found')
        }
    })
    return promise
}


async function Alldetaiks(products){
    try{
        await purches(products)
        console.log("purches successful")
        
    }
    catch(err){
        console.log(err)
    }
}
Alldetaiks("suger")