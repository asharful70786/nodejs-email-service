import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //email server domain
  port: 587,  //email server port no 
  secure: false, // true for port 465, false for other ports
  //always make sure you have on 2FA for your email account
  auth: {
    user: "ashrafulmomin@gmail.com", //user email
    pass: "XXXXXXXXX", //here Email app password
  },
});


const info = await transporter.sendMail({
  // from: '"ashraful momin" <maddison53@ethereal.email>', // sender address
  to: "ashrafulmomin7076@gmail.com", // list of receivers
  subject: "are you applying for thr job ..?", // Subject line
  // text: "Hello world?", // plain text body
  html: `<h1 styele='color: red;'>Offer letter </h1>`, // html body
});

console.log("Message sent: %s", info.messageId);