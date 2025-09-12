const express=require("express")
const app= express()
const mongoose=require("mongoose")
const cors=require("cors")
const regismodel=require("./model/model")

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/mern')

app.post('/ragister',(req,res)=>{
    const{name,email,password}=req.body
    regismodel.findOne({email:email})
    .then(user=>{
        if(user){
            res.json("already have an account")
        }
        else{
            regismodel.create({name:name,email:email,password:password})
            .then(result=>{
                res.json("account created")
            })
            .catch(err=>res.json(err))
        }
    })
    .catch(err=>res.json(err))
})


app.post("/login",(req,res)=>{
    const {email,password}=req.body
    regismodel.findOne({email:email})
    .then(user=>{
        if (user) {
            if (user.password===password) {
                res.json("login sucessfully")
            }
            else{res.json("incorrect password")}
        }
        else{'no record exited'}

    })
})

app.listen(5000,()=>{
    console.log("wegi lo connect")
})