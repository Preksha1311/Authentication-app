import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json)
app.use(express.urlencoded)
app.use(cors())
// configuration

mongoose.connect('mongodb+srv://Preksha:Preksha@preksha.dulyo.mongodb.net/myDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, ()=> {
    console.log("DB connected");
});

//routes 
app.get("/", (req, res)=> {
    res.send("My API")
})

app.listen(9002,()=>{
    console.log("BE started at port 9002");
})

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String
}
)

const User =  new mongoose.model("User", userSchema)

//routes
app.post("/login",(req,res)=>{
    res.send("My API login")})

app.post("/register",(req,res)=>{
    const {name, email, password}=req.body
    const user = new User({
        name,
        email,
        password
    }) 
    user.save() (err => {
        if(err){
            res.send(err)
        } else{
            res.send({ message:"Successfully Registered"})
        }
    })

 })

app.listen(9002,()=>{
    console.log("BE started at port 9002");
})    
