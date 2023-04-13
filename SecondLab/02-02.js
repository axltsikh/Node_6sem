const express = require("express")
const app = express();
app.get("/png",function(request,response){
    response.sendFile(__dirname + "/chris.jpg")
});
app.listen(5000)