var orm = require('../models/database')
const { Sequelize } = require('sequelize');
var models = orm.ORM();
var turtle = module.exports = {
    getAll: async function(){
        return new Promise(function(resolve,reject){
            models.turtle.findAll({
                include:[{model: models.weapon,as:"weaponID_WeaponID"},{model:models.pizza,as:"favouritePizzaID_FavouritePizzaID"},{model:models.pizza,as:"secondFavouritePizzaID_SecondFavouritePizzaID"}]
            }).then((result)=>{
                resolve(result)
            })
        })
    },
    getByID: async function(req){
        return new Promise(function(resolve,reject){
            if(!isNumber(req.params['id'])){
                var a = "ID должно быть числом";
                reject({message:"ID должно быть числом"})
                return
            }
            models.turtle.findOne({
                where:{
                    id:req.params['id']
                },
                include:[{model: models.weapon,as:"weaponID_WeaponID"},{model:models.pizza,as:"favouritePizzaID_FavouritePizzaID"},{model:models.pizza,as:"secondFavouritePizzaID_SecondFavouritePizzaID"}]
            }).then((result)=>{
                if(!result){
                    reject("Запись не найдена!");
                }else{
                    resolve(result)
                }
            })
        })
    },
    getByPizza: async function(pizza){
        console.log(pizza);
        return new Promise(function(resolve,reject){
            models.turtle.findAll({
                include:[{model:models.pizza,as:"favouritePizzaID_FavouritePizzaID",where:{name:pizza},}]
            }).then((result)=>{
                resolve(result)
            }).catch((error)=>{
                console.log(error);
                reject(error);
                return;
            })
        })
    },
    createTurtle:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            if(a.name===undefined || a.color===undefined){
                reject({message:"Заполните все поля!"})
                return
            }
            if(a.WeaponID===undefined){
                a.WeaponID=null
            }
            if(a.firstPizza===undefined){
                a.firstPizza=null
            }
            if(a.secondPizza===undefined){
                a.secondPizza=null
            }
            if(a.image===undefined){
                a.image=null
            }
            models.turtle.create({name:a.name,color:a.color,image:a.image,WeaponID:a.WeaponID,firstPizza:a.firstPizza,secondPizza:a.secondPizza}).then((result)=>{
                if(!result){
                    reject({message:"Произошла ошибка!"})
                    return
                }
                resolve(result)
            }).catch((error)=>{
                console.log(error);
                reject({message:"Произошла ошибка"})
                return

            })
        })
    },
    updateTurtle:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            if(!isNumber(a.id)){
                var a = "ID должно быть числом";
                reject({message:"ID должно быть числом"})
                return
            }
            if(a.name===undefined || a.color===undefined || a.id===undefined){
                reject({message:"Заполните все поля!"})
                return
            }
            if(a.WeaponID===undefined){
                a.WeaponID=null
            }
            if(a.firstPizza===undefined){
                a.firstPizza=null
            }
            if(a.secondPizza===undefined){
                a.secondPizza=null
            }
            if(a.image===undefined){
                a.image=null
            }
            models.turtle.update(
                {name:a.name,color:a.color,image:a.image,WeaponID:a.WeaponID,firstPizza:a.firstPizza,secondPizza:a.secondPizza},
                {where: {id:a.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return
                    }
                resolve(turtle)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"});
            })
        })
    },
    favoritePizzaBind:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            models.turtle.update(
                {firstPizza:a.firstPizza},
                {where: {id:a.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return
                    }
                resolve(result)
            }).catch((turtle)=>{
                reject({message:"Произошла ошибка"})
            })
        })
    },
    secondFavoritePizzaBind:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            models.turtle.update(
                {secondPizza:a.secondPizza},
                {where: {id:a.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                    }
                resolve(result)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"});
            })
        })
    },
    weaponBind:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            models.turtle.update(
                {WeaponID:a.WeaponID},
                {where: {id:a.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return
                    }
                resolve(turtle)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
            })
        })
    },
    favoritePizzaUnbind:async function(turtle){
        return new Promise(function(resolve,reject){
            var asa = JSON.parse(JSON.stringify(turtle));
            models.turtle.update(
                {firstPizza:null},
                {where: {id:asa.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return
                    }
                resolve(turtle)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
            })
        })
    },
    secondFavoritePizzaUnbind:async function(turtle){
        return new Promise(function(resolve,reject){
            var asa = JSON.parse(JSON.stringify(turtle));
            console.log(asa.id);
            models.turtle.update(
                {secondPizza:null},
                {where: {id:asa.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return
                    }
                resolve(turtle)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
            })
        })
    },
    weaponUnbind:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            models.turtle.update(
                {WeaponID:null},
                {where: {id:a.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return
                    }
                resolve(turtle)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
            })
        })
    },
    deleteTurtle:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            console.log(a.id);
            var buffer= models.turtle.findByPk(a.id)
            models.turtle.destroy(
                {where: {id:a.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return
                    }
                resolve(buffer)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
            })
        })
    },

    
    findTurtle:async function(body){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(body));
        models.turtle.findOne({
            where:{
                id:a.id
            },
        }).then((result)=>{
            console.log(result);
            if(result==null){
                resolve(0)
            }else{
                resolve(1)
            }
        })
        })
    },
    setImage:async function(path,id){
        return new Promise(function(resolve,reject){
            models.turtle.update(
                {image:path},
                {where: {id:id}}
                ).then((result)=>{
                resolve(1)
            })
        })
    }
}
function isNumber(value) {
    if (typeof value === "string") {
        return !isNaN(value);
    }
}