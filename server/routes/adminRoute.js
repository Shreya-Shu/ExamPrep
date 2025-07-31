const Admin=require('../models/Admin');
const express=require('express');
const router=express.Router();

router.post('/',async(req,res)=>{
    const admin= await new Admin(req.body);
    admin.save();
    
    return res.status(200).json("Api called succesfully")
});

module.exports=router;
