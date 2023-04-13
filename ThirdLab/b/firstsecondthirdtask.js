function firstJob(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Hello world")
        },2000)
    })
}
firstJob().then(result=>{
    console.log("firstJob resolved successfully with result: " + result)
})
const doFirstJob = async () =>{
    try{
        await firstJob();
        console.log("Succes")
    }
    catch(error){
        console.log("Error")
    }
}
doFirstJob()



function secondJob(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            reject("Error")
        },3000)
    })
}
secondJob().then(result=>{
    console.log("secondJob resolved succesfully")
})
.catch((error)=>{
    console.log("secondJob rejected: " + error)
})
const doSecondJob = async () =>{
    try{
        await secondJob();
        console.log("Succes")
    }
    catch(error){
        console.log(error)
    }
}
doSecondJob()


function thirdJob(data){
    if(typeof data != "number"){
        return new Promise((resolve,reject)=>{
            reject("Not a number")
        })
    }
    if(data%2==0){
        return new Promise((resolve,reject)=>{
            resolve("Odd")
        })
    }
    else{
        return new Promise((resolve,reject)=>{
            reject("even")
        })
    }
}
thirdJob(4).then(result=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
const doThirdJob = async (b) =>{
    try{
        await thirdJob(b);
        console.log("Succes")
    }
    catch(error){
        console.log(error)
    }
}
doThirdJob(15)