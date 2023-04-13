const mailer = require("nodemailer")
const smtpTransport = require("nodemailer-smtp-transport")
function sendviaNodeMailer(message,reciever,sender,password){
    console.log(sender);
    console.log(password);
    var tranposter = mailer.createTransport(smtpTransport({
        service: 'gmail',
        auth:{
            user: sender,
            pass: password
        }
    }))
    /*  nodemailer76@gmail.com     nxnmzwmzyzgpaivo*/
    var mailoptions={
        from: sender,
        to: reciever,
        text: message
    }
    tranposter.sendMail(mailoptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log(info.response);
        }
    })
}
exports.sendviaNodeMailer=sendviaNodeMailer