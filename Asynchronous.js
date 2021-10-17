// --------------- synchronous ---------

// where the synchronous code will block further execution of the 
// remaining code until it finishes
const func2=()=>{
    console.log("fun2 is called")
}
const func1=()=>{
    console.log("func1 called")
    func2()
    console.log("ending")
}
func1()

// ------------------------

// --------------- Asynchronous ----------

//  Asynchronous code allows the program to be excecuted immediatly
const func2=()=>{
    setTimeout(() => {
        console.log("Func2")
    }, 5000);
}
const func1=()=>{
    console.log("func1 called")
    func2()
    console.log("ending")
}
func1()






// ak kam jab tak khatam nahi ho jata dusra kam nahi hoga--- synchronous
// sabhi kam barabor chalte ranange ---- Asynchronous
