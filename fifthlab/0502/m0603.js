const mailer = require("nodemailer")
const smtpTransport = require("nodemailer-smtp-transport")
function sendviaNodeMailer(message,reciever,sender,password){
    let flag = true
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
            flag = false
        }else{
            console.log("Success");
        }
    })
    if(flag){
        return "Успешно отправлено"
    }
    else{
        return "Произошла ошибка"
    }
}
exports.sendviaNodeMailer=sendviaNodeMailer