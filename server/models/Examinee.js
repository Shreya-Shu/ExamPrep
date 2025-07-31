const mongoose=require('mongoose');
const examineeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    
    },
    number:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }, college:{
        type:String,
        required:true
    },
    quqlification:{
        type:String,
        required:true
    },
    status:{
        enum:['active','inactive','delete']
    }
})
module.exports=mongoose.model('Examinee',examineeSchema);
