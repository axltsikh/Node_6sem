const { Sequelize } = require('sequelize');
var orm = require('../models/database')
var models = orm.ORM();
var turtle = module.exports = {
    getAll: async function(){
        return new Promise(function(resolve,reject){
            models.weapon.findAll({
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
                return;
            }
            models.weapon.findOne({
                where:{
                    id:req.params['id']
                },
            }).then((result)=>{
                if(!result){
                    reject({message:"Запись не найдена"})
                    return
                }
                resolve(result)
            })
        })
    },
    getByDPS: async function(dps){
        return new Promise(function(resolve,reject){
            const dpsNum = Number(dps.slice(2));
        if(dps.startsWith("gt")){
            models.weapon.findAll({
                where:{
                    dps:{[Sequelize.Op.gt]:dpsNum}
                }
            }).then((result)=>{
                resolve(result)
            })
        }else{
            models.weapon.findAll({
                where:{
                    dps:{[Sequelize.Op.lt]:dpsNum}
                }
            }).then((result)=>{
                resolve(result)
            })
        }
        })
    },
    createWeapon:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            if(a.dps===undefined || a.name===undefined){
                reject({message:"Заполните все поля"})
                return
            }
            if(a.dps>500){
                reject("Слишком большой DPS");
                return
            }
            models.weapon.create({name:a.name,dps:a.dps}).then((result)=>{
                resolve(result)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
                return
            })
        })
    },
    updateWeapon:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            if(!isNumber(a.id)){
                reject({message:"ID должно быть числом"})
                reject(a)
                return;
            }
            if(a.dps===undefined || a.name===undefined || a.id===undefined){
                reject({message:"Заполните все поля"})
                return
            }
            if(a.dps>500){
                reject({message:"Слишком большой DPS"});
                return
            }
            models.weapon.update(
                {name:a.name,dps:a.dps},
                {where: {id:turtle.id}}
                ).then((result)=>{
                    if(!result){
                        reject({message:"Произошла ошибка"})
                        return
                    }
                resolve(turtle)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
                return
            })
        })
    },
    deleteWeapon:async function(turtle){
        return new Promise(function(resolve,reject){
            var a = JSON.parse(JSON.stringify(turtle));
            if(!isNumber(a.id)){
                var a = "ID должно быть числом";
                reject({message:"ID должно быть числом"})
                return;
            }
            var buffer = models.weapon.findByPk(a.id)
            models.weapon.destroy(
                {where: {id:a.id}}
                ).then((result)=>{
                if(!result){
                    reject({message:"Запись не найдена"})
                    return
                }
                resolve(buffer)
            }).catch((error)=>{
                reject({message:"Произошла ошибка"})
                return
            })
        })
    }

}
function isNumber(value) {
    if (typeof value === "string") {
        return !isNaN(value);
    }
}
