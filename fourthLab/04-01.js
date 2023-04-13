const express = require('express')
const app = express();
app.use(express.json())
const DB = require('./DB')
var database = new DB();
database.on('Select',(request,response)=>{
    database.select().then(result=>{
        response.end(JSON.stringify(result))
    })
})
database.on('Insert',(request,response)=>{
    database.insert(JSON.stringify(request.body))
        .then(result=>{
            response.send(result)
        })
})
database.on('Update',(request,response)=>{
    database.update(JSON.stringify(request.body)).then(result=>{
        response.end(result)
    })
    .catch((error)=>{
        response.end(error)
    })
})
database.on('Delete',(request,response)=>{
    database.delete(request.query.id).then(result=>{
        response.type('json')
        response.end(JSON.stringify(result))
    })
    .catch((error)=>{
        response.type("text")
        response.end(error)
    })
})
app.get('/api/db',function(request,response){
    database.emit('Select',request,response)
})
app.post('/api/db',function(request,response){
    database.emit("Insert",request,response)
})
app.put('/api/db',function(request,response){
    console.log(JSON.stringify(request.body));
    database.emit('Update',request,response)
})
app.delete('/api/db',function(request,response){
    database.emit('Delete',request,response)
})
app.get('/',function(request,response){
    response.sendFile(__dirname + "/index.html")
})
app.listen(3000)