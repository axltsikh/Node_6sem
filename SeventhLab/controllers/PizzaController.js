const asyncHandler = require('express-async-handler')
var service = require('../service/PizzaService')
exports.getAll = asyncHandler(async(req,res,next)=>{
    if(req.query.calories!=undefined){
        console.log("calories");
        service.getByCalories(req.query.calories).then((result)=>{
            res.end(JSON.stringify(result))
        }).catch((error)=>{
            res.end(JSON.stringify(error))
        });
    }else{
        service.getAll().then((result)=>{
            res.end(JSON.stringify(result))
        }).catch((error)=>{
            res.end(JSON.stringify(error))
        });
    }

})
exports.getByID = asyncHandler(async(req,res,next)=>{
    service.getByID(req).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})
exports.getByCalories = asyncHandler(async(req,res,next)=>{
    service.getByCalories(req.query.calories).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})
exports.createPizza = asyncHandler(async(req,res,next)=>{
    service.createPizza(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });;
})
exports.updatePizza = asyncHandler(async(req,res,next)=>{
    service.updatePizza(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });;
})
exports.deletePizza = asyncHandler(async(req,res,next)=>{
    service.deletePizza(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });;
})
exports.superFat = asyncHandler(async(req,res,next)=>{
    service.superFat().then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})