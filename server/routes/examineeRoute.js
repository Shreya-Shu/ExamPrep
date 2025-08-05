const Examinee=require('../models/Examinee');// importing the model Examinee.js
const express = require('express');
const router=express.Router();

router.get('/',async(req,res)=>{// it will be used when we get the"get request".
    const examinee=await Examinee.find();
    return res.json({data:examinee})
})
router.post('/', async (req, res) => {
  try {
    console.log("Incoming data:", req.body);  // Debug line
    const examinee = new Examinee(req.body);
    await examinee.save();  // ⬅ make sure to await the save

    return res.status(201).json({ message: "Examinee registered successfully" });
  } catch (error) {
    console.error("Error in POST /examinee:", error);  // Log the actual error
    return res.status(400).json({ error: error.message });
  }
});

router.delete('/:id',async(req,res)=>{
    const {id}=req.params
    const examinee=await Examinee.findByIdAndDelete(id);
    //session.save();
    return res.json({message:'Deleted successfully'});
})

router.put('/:id',async(req,res)=>{
    const{id}=req.params
    const examinee=await Examinee.findByIdAndUpdate(id,req.body)
    return res.json({message:"updated Successfully"})
})

module.exports=router;//beacuse we want to use this router in other files that's why we use exports
