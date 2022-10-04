import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";


const msg ={
    from: "arpitmishra.com@gmail.com",
    to: "arpitzwerl.com@gmail.com",
    subject: "Nodemailer test",
    text: "Testing out nodemailer"
};
nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "arpitmishra.com@gmail.com",
        pass:"ntponkiiozxvztxy"
    },
    port: 465,
    host: "smpt.gmail.com"
})
.sendMail(msg,(err)=>{
    if(err){
        return console.log("Error Occurs", err);
    }else{
        return console.log("Email sent")
    }
})

