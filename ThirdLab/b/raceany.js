function squaring(num){
    return new Promise((resolve,reject)=>{
        if(typeof num == "number"){
            setTimeout(function(){
                resolve(Math.pow(num,2))
            },3000)
        }
        else{
            reject("Wrong format")
        }
    })
}
function thirdPower(num){
    return new Promise((resolve,reject)=>{
        if(typeof num == "number"){
            setTimeout(function(){
                resolve(Math.pow(num,3))
            },2000)
        }
        else{
            reject("Wrong format")
        }
    })
}
function fourthPower(num){
    return new Promise((resolve,reject)=>{
        if(typeof num == "number"){
            setTimeout(function(){
                resolve(Math.pow(num,4))
            },5000)
        }
        else{
            reject("Wrong format")
        }
    })
}
// Promise.race([squaring(2),thirdPower("asdasd"),fourthPower(4)]).then(result=>{
//     console.log("Race result: " + result)
// }).catch(error=>{
//     console.log("Race error: " + error);
// })
Promise.any([squaring(2),thirdPower("asd"),fourthPower(4)]).then(result=>{
    console.log("Any result: " + result)
}).catch(error=>{
    console.log("Any error: " + error);
})