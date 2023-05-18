var pizza = require(__dirname+"/Routers/PizzaRouter");
var turtle = require(__dirname+"/Routers/TurtleRouter");
var weapon = require(__dirname+"/Routers/WeaponRouter");
var service = require(__dirname + '/service/TurtleService')
var fileUpload = require('express-fileupload');
const express = require('express');
const app = express();
app.use(fileUpload());
app.use(express.json())
app.use("/api/turtles",turtle)
app.use("/api/weapons",weapon)
app.use("/api/pizzas",pizza)
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.get("/upload",function(req,res){
    res.sendFile(__dirname+'/upload.html')
});
app.post("/upload",function(req,res){
    if (!req.files) {
        return res.status(400).end("No files were uploaded.");
    }
    service.findTurtle(req.body).then((result)=>{
        if(result==1){
            req.files.photo.mv(__dirname + '/images/'+req.files.photo.name)
            var a = JSON.parse(JSON.stringify(req.body));
            service.setImage(req.files.photo.name,a.id).then((result)=>{
                if(result==1){
                    res.end("Success")
                }
            })
        }else{
            res.end(JSON.stringify("ID не существует!"))
        }
    })
})
app.use(express.static('images'))
app.use("/images", (req, res, next) => {
    const filePath = path.join(__dirname, "images", req.path);
    if (!fs.existsSync(filePath)) {
      res.status(404).send("Image not found");
    } else {
      next();
    }
  });
app.listen(3000)