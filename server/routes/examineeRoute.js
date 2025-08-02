const Examinee=require('../models/Examinee');// importing the model Examinee.js
const express = require('express');
const router=express.Router();

router.get('/',async(req,res)=>{// it will be used when we get the"get request".
    return res.json("Api called successfully");
})
router.post('/',async(req,res)=>{
    const examinee= await new Examinee(req.body);
    examinee.save();
    
    return res.json("Api called succesfully")
});

module.exports=router;//beacuse we want to use this router in other files that's why we use exports
