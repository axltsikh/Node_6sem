const express = require("express")
const app = express();

app.get("/fact",function(request,response){
    response.end(JSON.stringify({
        "k":request.query.k,
        "fact": countFactorial(request.query.k)
    }))
});
app.get("/cyclefact",function(request,response){
    response.sendFile(__dirname + '/cycleindex.html')
})
function countFactorial(number){
    let factorial = 1
    while(number > 1){
        factorial*=number
        number -= 1
    }
    return factorial
}
app.listen(5000)