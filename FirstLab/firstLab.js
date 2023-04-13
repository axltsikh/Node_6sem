const http = require("http");
 
http.createServer(function(request, response){ 
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<h2>hello world</h2>");
    response.end();
}).listen(5000);