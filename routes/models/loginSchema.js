const mongoose = require('mongoose')


const loginSchema= new mongoose.Schema({
    name:{
        type:String
    },
    number:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})

const loginDetails = mongoose.model('users',loginSchema)

module.exports=loginDetails;