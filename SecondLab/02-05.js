const express = require("express")
const app = express();
app.get("/fetch",function(request,response){
    response.sendFile(__dirname + "/fetch.html")
});
app.listen(5000)