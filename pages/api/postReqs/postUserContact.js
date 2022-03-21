import * as fs from 'fs'
const nodemailer=require('nodemailer')

export default async function handler(req,res){
    if(req.method=='POST'){
        let data=await fs.promises.readdir(`userContactdata`,'utf-8')
        fs.promises.writeFile(`userContactdata/${data.length+1}.json`,JSON.stringify(req.body))

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
            subject:'Contact Received',
            text: `A person with Contact Number : ${req.body.contactNumber} showed interest in a product with:\nProduct Name : ${req.query.productName}\nProduct Id : ${req.query.productId}\nPrice : Rs. ${req.query.productPrice}`
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

        res.status(200).json("Ok")
    }
    else{
        res.status(401).json("Not Allowed")
    }
}