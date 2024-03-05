// Instantiate the server
const express = require("express");
const app = express();

// dotenv import to access environment variables
require("dotenv").config();

// Middleware to parse the body of the request
app.use(express.json());

const userRoutes = require('./routes/user');

// Mount the API
app.use("/api/v1/",userRoutes);

// Cross-Origin Resource Sharing 
var cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{

  console.log(`SUCCESSFULLY STARTED AT PORT ${PORT}`);

});

const dbConnect = require('./config/database');
dbConnect();

app.get('/',(req,res)=>{

  res.send(`<h1>Backend is running</h1>`)
});
