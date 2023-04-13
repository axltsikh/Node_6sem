const express = require("express")
const app = express();
var prompt = require("prompt")
prompt.start();
var buffer = "norm"
app.get("/",function(request,response){
    response.send(buffer)
})
app.listen(5000)
userInput()
function userInput(){
    prompt.get([{
        name: 'condition',
        message: 'reg = ' + buffer + '--> '
    }],function(err,result){
        switch(result.condition){
                    case "norm":
                        buffer="norm"
                        userInput()
                        break;
                    case "stop":
                        buffer="stop"
                        userInput()
                        break;
                    case "test":
                        buffer="test"
                        userInput()
                        break;
                    case "idle":
                        buffer="idle"
                        userInput()
                        break;
                    case "exit":
                        process.exit()
                    default:
                        userInput()
                        break;
    }})
}


