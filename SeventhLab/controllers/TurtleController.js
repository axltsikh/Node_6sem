const asyncHandler = require('express-async-handler')
const { Sequelize } = require('sequelize');
var service = require('../service/TurtleService')
exports.getAll = asyncHandler(async(req,res,next)=>{
    console.log("getall");
    if(req.query.favoritePizza!=undefined){
        service.getByPizza(req.query.favoritePizza).then((result)=>{
            res.end(JSON.stringify(result))
        }).catch((error)=>{
            res.end(JSON.stringify(error))
        });
    }else{
        service.getAll().then((result)=>{
            res.end(JSON.stringify(result))
        })
    }
    console.log(req.query.favoritePizza);

})
exports.getByID = asyncHandler(async(req,res,next)=>{
    service.getByID(req).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})

exports.getByPizza = asyncHandler(async(req,res,next)=>{
    console.log("pizza");
    service.getByPizza(req.query.favoritePizza).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})
exports.createTurtle = asyncHandler(async(req,res,next)=>{
    service.createTurtle(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})
exports.updateTurtle = asyncHandler(async(req,res,next)=>{
    service.updateTurtle(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.favoritePizzaBind = asyncHandler(async(req,res,next)=>{
    service.favoritePizzaBind(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.secondFavoritePizzaBind = asyncHandler(async(req,res,next)=>{
    service.secondFavoritePizzaBind(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.weaponBind = asyncHandler(async(req,res,next)=>{
    service.weaponBind(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.favoritePizzaUnbind = asyncHandler(async(req,res,next)=>{
    service.favoritePizzaUnbind(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.secondFavoritePizzaUnbind = asyncHandler(async(req,res,next)=>{
    service.secondFavoritePizzaUnbind(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.weaponUnbind = asyncHandler(async(req,res,next)=>{
    service.weaponUnbind(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.deleteTurtle = asyncHandler(async(req,res,next)=>{
    service.deleteTurtle(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})