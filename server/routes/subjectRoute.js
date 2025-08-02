const express=require('express');
const router=express.Router();
const Subject=require('../models/Subject');


router.post('/',async (req,res)=>{
    const subject=new Subject(req.body);
    subject.save();
 return  res.json({message:"Subject added Successfully"});

});

router.get('/',async(req,res)=>{
const subject= await Subject.find();

return res.json({data:subject})
    });

router.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    const subject=await Subject.findByIdAndDelete(id);
    return res.json({message:"deleted successfully"})
}) ;   
module.exports=router