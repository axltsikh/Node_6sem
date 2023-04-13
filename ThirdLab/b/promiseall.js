function squaring(num){
    return new Promise((resolve,reject)=>{
        if(typeof num == "number"){
            resolve(Math.pow(num,2))
        }
        else{
            reject("Wrong format")
        }
    })
}
function thirdPower(num){
    return new Promise((resolve,reject)=>{
        if(typeof num == "number"){
            resolve(Math.pow(num,3))
        }
        else{
            reject("Wrong format")
        }
    })
}
function fourthPower(num){
    return new Promise((resolve,reject)=>{
        if(typeof num == "number"){
            resolve(Math.pow(num,4))
        }
        else{
            reject("Wrong format")
        }
    })
}
Promise.all([squaring(2),thirdPower(2),fourthPower(7)]).then(values=>{
    console.log(values)
})
.catch((error)=>{
    console.log(error)
})