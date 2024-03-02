// Instantiate the server
const express = require("express");
const app = express();

// dotenv import to access environment variables
require("dotenv").config();

// Middleware to parse the body of the request
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{

  console.log(`SUCCESSFULLY STARTED AT PORT ${PORT}`);

});

app.get('/',(req,res)=>{

  res.send(`<h1>Backend is running</h1>`)
})