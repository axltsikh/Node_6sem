const express = require("express")
const bodyparser = require("body-parser")
const mailer = require("m0603tichon")
const app = express()
app.use(bodyparser.json())
app.get("/",function(request,response){
    response.sendFile(__dirname + "/index.html")
})
app.post("/",function(request,response){
    let asd = JSON.parse(JSON.stringify(request.body))
    response.send(mailer.sendviaNodeMailer(asd.message,asd.reciever,asd.sender,asd.password))
})
app.listen(3000)


 /*  nodemailer76@gmail.com     nxnmzwmzyzgpaivo*/