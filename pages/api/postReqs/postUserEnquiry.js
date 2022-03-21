import * as fs from 'fs'
const nodemailer=require('nodemailer')

export default async function handler(req,res){
    if(req.method=='POST'){
        let data=await fs.promises.readdir('userEnquirydata','utf-8')
        fs.promises.writeFile(`userEnquirydata/${data.length+1}.json`,JSON.stringify(req.body))

        // Transporter for Nodemailer
        var transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'newmailer001@gmail.com',
                pass:'aqmwhmjsmbonmppx'
            }
        });
        // Setting Mail Options
        var mailOptions={
            from: 'newmailer001@gmail.com',
            to: 'annibhalla2001@gmail.com',
            subject:'New Message',
            text: `A New Message has been received from a person with\nName : ${req.body.name},\nEmail : ${req.body.email},\nContact : ${req.body.contact},\nMessage : ${req.body.enquiry}`
        };
        // Sent Mail Confirmation
        transporter.sendMail(mailOptions,(err,send)=>{
            if(err){                        
                console.log(err);
            }
            else{
                console.log('Email Sent: '+send.response)
            }
        });

        res.status(200).json("Success")
    }
    else{
        res.status(401).json("Not Allowed")
    }
}