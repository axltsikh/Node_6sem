const asyncHandler = require('express-async-handler')
var service = require('../service/WeaponService')
exports.getAll = asyncHandler(async(req,res,next)=>{
    if(req.query.dps!=undefined){
        service.getByDPS(req.query.dps).then((result)=>{
            res.end(JSON.stringify(result))
        }).catch((error)=>{
            res.end(JSON.stringify(error))
        })
    }else{
        service.getAll().then((result)=>{
            res.end(JSON.stringify(result))
        }).catch((error)=>{
            res.end(JSON.stringify(error))
        })
    }

})
exports.getByID = asyncHandler(async(req,res,next)=>{
    service.getByID(req).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.getByDPS = asyncHandler(async(req,res,next)=>{
    service.getByDPS(req.query.dps).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    })
})
exports.createWeapon = asyncHandler(async(req,res,next)=>{
    service.createWeapon(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})
exports.updateWeapon = asyncHandler(async(req,res,next)=>{
    var a = JSON.parse(JSON.stringify(req.body));
    console.log(a.body);
    service.updateWeapon(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})
exports.deleteWeapon = asyncHandler(async(req,res,next)=>{
    service.deleteWeapon(req.body).then((result)=>{
        res.end(JSON.stringify(result))
    }).catch((error)=>{
        res.end(JSON.stringify(error))
    });
})


function isNumber(value) {
    if (typeof value === "string") {
        return !isNaN(value);
    }
}