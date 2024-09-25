import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();
const port=process.env.PORT;

app.use(express.json());



//routes
app.use("/api/",userRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Hello there</h1>")
})

app.listen(port,()=>{
    console.log(`${port}`)
    connectDB()
});
