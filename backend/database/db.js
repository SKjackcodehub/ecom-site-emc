import mongoose from "mongoose"

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DataBase);
        console.log("DataBase Connect")

    }catch (error){
       console.log(error)
    }
};

export default connectDB;