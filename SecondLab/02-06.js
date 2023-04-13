const express = require("express")
const app = express();
app.get("/jquery",function(request,response){
    response.sendFile(__dirname + "/jquery.html")
});
app.listen(5000)