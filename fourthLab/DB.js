const Emitter = require('events')
const Person = require("./Person")

class DB extends Emitter{
    counter = 3
    Persons = [new Person(1,'Ivan','29.05.2002'),new Person(2,'Alex','03.09.2002')]
    buffer=[]   
    select(){
        return new Promise((resolve,reject)=>{
            resolve(this.Persons)
        })
    }
    insert(personToAdd){
        return new Promise((resolve,reject)=>{
            var buffer = JSON.parse(personToAdd)
            this.Persons.push(new Person(this.counter,buffer.name,buffer.bday))
            this.counter++
            resolve("Успешно добавлено") 
        })
    }
    update(personToUpdate){
        return new Promise((resolve,reject)=>{
            var buffer = JSON.parse(personToUpdate)
            for(let i = 0;i<this.Persons.length;i++){
                if(this.Persons[i].id==buffer.id){
                    this.Persons[i].name=buffer.name
                    this.Persons[i].bday=buffer.bday
                    resolve("Успешно обновлено")
                }
            }
            reject("Запись не существует");
        })
    }
    delete(id){
        return new Promise((resolve,reject)=>{
            let buffer=null;
            for(let i = 0;i<this.Persons.length;i++){
                if(this.Persons[i].id==id){
                    buffer=this.Persons[i]                
                    this.Persons.splice(i,1)
                }
            }
            if(buffer==null){
                reject("Запись не существует")
            }
            resolve(buffer);
        })
    }
}  
module.exports = DB