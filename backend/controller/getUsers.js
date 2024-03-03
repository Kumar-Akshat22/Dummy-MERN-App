const User = require('../models/User');

exports.getUser = async(req,res)=>{

    try{

        // Fetch the details of all the users 
        const userData = await User.find({});

        res.status(200).json({

            success:true,
            data:userData,
        });


    }

    catch(err){

        console.log(err);
        res.status(500).json({

            success:false,
            message:err.message
        })


    }

}