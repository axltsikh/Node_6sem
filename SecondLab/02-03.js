const express = require("express")
const app = express();
app.get("/api/name",function(request,response){
    response.setHeader("Content-type","text/plain")
    response.send('Тихон Алексей Александрович')
});
app.listen(3000)