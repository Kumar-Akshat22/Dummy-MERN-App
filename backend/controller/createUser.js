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
        })

    }

    catch(err){


    }
}