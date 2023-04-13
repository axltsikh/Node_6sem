const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){
    const chunks = [];
    let result
    if(request.method==='POST'){
        request.on('data', chunk => chunks.push(chunk));
        request.on('end', () => {
            result = JSON.parse(Buffer.concat(chunks).toString());
            })
    }
    fs.readFile("index.html","utf8",function(error,data){
        data=data.replace("{method}","Метод: " + request.method)
            .replace("{uri}","URI: " + request.url)
            .replace("{version}","Версия: " + request.httpVersion)
            .replace("{headers}",request.rawHeaders)
        if(request.method==='POST'){
            data=data.replace("{body}","Body: " + result.FirstParameter + " " + result.SecondParameter);
        }
        response.end(data);
    })
}).listen(5000);