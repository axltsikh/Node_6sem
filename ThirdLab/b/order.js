const uuid=require("uuid")
function createOrder(cardNumber){
    return new Promise((resolve,reject)=>{
        if(validateCard(cardNumber)){
            setTimeout(function(){
                resolve(uuid.v4())
            },5000)
        }
        else{
            reject("Card is not valid")
        }
    })
}
function validateCard(cardNum){
    console.log("Card number: " + cardNum);
    if(Math.floor(Math.random()*2)==0){
        return true
    }
    else 
        return false
}
function proceedToPayment(orderID){
    console.log("Order ID: " + orderID)
    return new Promise((resolve,reject)=>{
        if(Math.floor(Math.random()*2)==0){
            resolve("Payment successfull")
        }
        else{
            reject("Payment failed")
        }
    })
}

// createOrder('2435 5678 4321 9875').then(result=>{
//     return proceedToPayment(result)
// })
// .then(result=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

const createOrderHandler = async (number) =>{
    try{
        var a = await createOrder(number)
        var b = await proceedToPayment(a) 
        console.log("Succes: " + [a,b])
    }
    catch(Error){
        console.log(Error)
    }
}

createOrderHandler('4357 1237 9472 0193')

