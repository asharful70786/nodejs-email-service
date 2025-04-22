import { Resend } from 'resend';

const resend = new Resend('xxxxxxxxx'); // here api_key from resend.com
const otp = Math.floor(1000 + Math.random() * 9000);

await resend.emails.send({
  from: 'StorageApp <otp@ashraful.in>',// ue can make contact@ashraful.in or marketing@ashraful.in sm way as many as we want // here ashraful.in my domain  . where i have attach all credential of resend

  to: ['ashrafulmomin7@gmail.com'],


  subject: 'Storage App Otp ',
  html: `<p> your otp is ${otp}</p>`,
});