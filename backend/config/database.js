// Importing the Mongoose Library
const mongoose = require('mongoose');

// Import the dotenv library for importing the environment variables
require("dotenv").config();

const dbConnect = ()=>{

    mongoose.connect(process.env.DATABASE_URL,{

        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(
        ()=>{
            console.log('DB CONNECTED SUCCESSFULLY')
        })
    .catch(
        (err)=>{
            console.log('DB CONNECTION ERROR');
            console.error(err.message);
            process.exit(1);
        });
};

module.exports = dbConnect;