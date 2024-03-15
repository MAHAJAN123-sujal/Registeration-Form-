const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema =  new Schema({
    name: String,
    age:Number,
    phone:Number,
    email:{
        type:String,
        unique:true
    },
    address:String,
    password:String
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;