// const mongoose=require("mongoose")
// mongoose.connect(process.env.MONGOURL,{
//     useNewUrlParser:true,
//     useUndefinedTopology:true
// })
// .then(()=>{console.log('connected')})
// .catch(err=>{
//     console.log("error")
// })

const express=require("express")
const app=express()
const https=require("https")
app.get('/',async(req,res)=>{
    res.send('pink')
})
const options = {
    key: fs.readFileSync('./cert/key.pem'), // Replace with the path to your key
    cert: fs.readFileSync('./cert/cert.pem') // Replace with the path to your certificate
  }
https.createServer(app,options).listen(PORT,()=>{
    console.log(`server created ${PORT}`)
})


