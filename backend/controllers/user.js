import {User} from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import sendMail from "../middleware/sendMail.js";


export const registerUser=async(req,res)=>{
     try{
        const {name,email,password,contact} =req.body;
        console.log(req.body) 
        //Check email address
       let user=await User.findOne({ email });
       if(user){
        res.status(400).json({
            message:"User Email Already Exists",
        });
       }
     //raw pswd to hashed
     const hashPswd=await bcrypt.hash(password, 10);
     
     //Generate otp
     const otp=Math.floor(Math.random()* 1000000);
     
     //create signed activation token
     const activationToken=jwt.sign({user,otp},process.env.ACTIVATION_KEY,{expiresIn : "5m", }
     );
     
     //send mail to user
     const message=`Please Verify your account using otp your otp is ${otp}`;
     await sendMail(email,"Welcome to E-com site", message);
     res.status(200).json({
        message: "Otp sent to your mail",
        activationToken,
    });
          }catch (error){
        res.status(500).json({
            message:error.message,
        });

     }
      
}