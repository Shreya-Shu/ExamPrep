const Question=require('../models/Question');
const express=require('express');
const router=express.Router();

router.post('/',async(req,res)=>{
    const question=await new Question(req.body);
    question.save()
    return res.json({message:"Question Added successfully"});
})
router.get('/',async(req,res)=>{
    const question=await Question.find();
    return res.json({data:question})
})
module.exports=router