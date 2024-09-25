import {createTransport} from "nodemailer";

const sendMail =async(email,subject,text)=>{
    const transport=createTransport({
        host: "smtp.gmail.com",
        port:465,
        auth:{
            user:process.env.Gmail,
            user:process.env.Gpass,
        },
    })
    await transport.sendMail({
        from: process.env.Gmail,
        to: email,
        subject,
        text,
    })
}
export default sendMail