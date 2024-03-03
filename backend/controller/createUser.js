const User = require("../models/User");

exports.createUser = async(req,res)=>{

    try{

        const {name , email , title , department , role} = req.body;
        const user = await User.create({
            name,
            email,
            title,
            department,
            role,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`
        });

        return res.status(200).json({
            message:'User created successfully',
            data:user,
        });
    
    }

    catch(err){

        console.log(err);
        return res.status(500).json({
            message:err.message,
        });

    }
}