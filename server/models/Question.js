const mongoose=require('mongoose');
const questionSchema=new mongoose.Schema({
    questionText:{
        type:String,
    },
    optionA:{
type:String,
    },
  optionB:{
type:String,
    },
    optionC:{
type:String,
    },
    optionD:{
        type:String,
    },
    correctAnswer:{
type:String,
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Question',questionSchema)
