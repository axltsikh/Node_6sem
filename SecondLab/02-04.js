const express = require("express")
const app = express();
app.get("/xmlhttprequest",function(request,response){
    response.sendFile(__dirname + "/xmlhttprequest.html")
});
app.listen(5000)