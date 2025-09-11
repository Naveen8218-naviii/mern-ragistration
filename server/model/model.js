const mongoose=require("mongoose")

const reqSchema=new mongoose.Schema({
name:String,
email:String,
password:String
})

const regisModel= mongoose.model("users",reqSchema)

module.exports=regisModel;