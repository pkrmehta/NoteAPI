const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose")

app.use(express.json());

app.use((req, res, next)=>{
    console.log("HTTP Method - "+req.method+ " , URL - "+req.url)
    next();
})

app.use(cors());

app.use("/users", userRouter)
app.use("/note", noteRouter)

app.get("/", (req, res) =>{
    res.send("Notes API");
})

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://admin:admin@cluster0.ucmitov.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. 5000")
    })
})
.catch((error)=>{
    console.log(error)
})

