const express = require("express");
const { use } = require("../routes/jobSeekers");
const app = express();
app.use(express.json());
const PORT= 8080


app.get('/',(req,res)=>{
res.send("Welcome to Home Page")
})






app.listen(PORT,()=>{
    console.log(`db is started on ${PORT}`)
})
