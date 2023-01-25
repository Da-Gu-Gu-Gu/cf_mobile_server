const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    fbId:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
    },
    image:{
        type:String,
    },
    cl:{
        type:Array,
        default:[]
    }
})

userSchema.set('toObject',{getters:true,virtuals:true})





const User=mongoose.model('user',userSchema)

module.exports=User