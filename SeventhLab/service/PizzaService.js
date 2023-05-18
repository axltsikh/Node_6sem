const { Sequelize } = require('sequelize');
var orm = require('../models/database')
var models = orm.ORM();
var turtle = module.exports = {
    getAll: async function(){
        return new Promise(function(resolve,reject){
            models.pizza.findAll({
            }).then((result)=>{
                resolve(result)
            })
        })
    },
    getByID: async function(req){
        return new Promise(function(resolve,reject){
            if(!isNumber(req.params['id'])){
                var a = {message:"ID должно быть числом"};
                reject(a)
                return;
            }
            models.pizza.findOne({
                where:{
                    id:req.params['id']
                },
            }).then((result)=>{
                if(!result){
                    reject({message:"Запись не найдена!"});
                    return
                }
                resolve(result)
            })
        })
    },
    getByCalories: async function(calories){
        return new Promise(function(resolve,reject){
            const caloriesNum = Number(calories.slice(2));
        if(calories.startsWith("gt")){
            models.pizza.findAll({
                where:{
                    calories:{[Sequelize.Op.gt]:caloriesNum}
                }
            }).then((result)=>{
                resolve(result)
            })
        }else{
            models.pizza.findAll({
                where:{
                    calories:{[Sequelize.Op.lt]:caloriesNum}
                }
            }).then((result)=>{
                resolve(result)
            })
        }
        })
    },
    createPizza:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            if(a.calories===undefined || a.name === undefined){
                reject({message: "Заполните все поля!"});
                return

            }
            if(a.calories>2000){
                reject({message: "Слишком много калорий!"})
                return

            }

            models.pizza.create({name:a.name,calories:a.calories}).then((result)=>{
                if(!result){
                    reject({message: "Произошла ошибка!"});
                    return

                }
                resolve(result)
            })
        })
    },
    updatePizza:async function(turtle){
        return new Promise(function(resolve,reject){
            
            var a = JSON.parse(JSON.stringify(turtle));
            if(!isNumber(a.id)){
                var a = {message:"ID должно быть числом"};
                reject(a)
                return;
            }
            if(a.calories===undefined || a.name === undefined || a.id===undefined){
                reject({message: "Заполните все поля!"});
                return
            }
            if(a.calories>2000){
                reject({message: "Слишком много калорий!"})
                return
            }
            models.pizza.update(
                {name:a.name,calories:a.calories},
                {where: {id:turtle.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message: "Запись не найдена"})
                        return

                    }
                resolve(models.pizza.findByPk(a.id))
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
                return

            })
        })
    },
    deletePizza:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            if(!isNumber(a.id)){
                var a = {message: "ID должно быть числом"};
                reject(a)
                return;
            }
            console.log(a.id);
            var buffer = models.pizza.findByPk(a.id)
            models.turtle.update(
                {secondPizza:null},
                {where:{secondpizza:a.id}}
            ).then((result)=>{
                models.turtle.update(
                    {firstPizza:null},
                    {where:{firstpizza:a.id}}
                ).then((result)=>{
                    models.pizza.destroy(
                        {where: {id:a.id}}
                        ).then((result)=>{
                            if(!result){
                                reject({message: "Запись не найдена"})
                                return
                            }
                            resolve(buffer)
                    }).catch((error)=>{
                        reject({message:"Произошла ошибка"})
                        return
                    })
                })
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
                return
            })
        })
    },
    superFat: async function(){
        const t = await models.sequelize.transaction();

        await models.pizza.update(
            { name: Sequelize.literal("CONCAT(name, ' SUPER FAT!')") },
            { where: { calories: { [Sequelize.Op.gt]: 1500 } }, transaction: t }
        );

        await t.commit();
        return models.pizza.findAll();
    }
}
function isNumber(value) {
    if (typeof value === "string") {
        return !isNaN(value);
    }
}