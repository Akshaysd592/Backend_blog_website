const express = require("express");
const app = express();


// app.listen(3000,()=>{
//     console.log("server is started successfully")
// })

// app.get('/',(req,res)=>{
//     res.send("This is home page")
// })

require("dotenv").config();
const PORT = process.env.PORT || 3000; // if not obtained PORT the using 3000

// middleware
app.use(express.json());


const blog = require("./routes/blog");
// mount 
app.use("/api/v1",blog);




// database
const connectDB = require("./config/database");
connectDB();

app.listen(PORT,()=>{
    console.log(`App is started ${PORT} `);
})

app.get('/',(req,res)=>{
    res.send("This is home page");
})
