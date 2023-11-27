function createOrder(){

    var p1 = new Promise((resolve,reject)=>{
        resolve("12345")
    })
    return p1

}

function payment(orderId){
    
    var p2 = new Promise((resolve,reject)=>{
resolve("Success")
    })
    return p2
}


createOrder()
.then((data)=>{
 console.log(data)
 return data
 //throw new Error("Simply triggering error")
})
.catch((e)=>{
    console.log(e.message)
    //return "fhdghs"
})
.then((data)=>{
    console.log("1",data)
   //return payment(data)
   
   })
   .then((data)=>{
     console.log("2",data)
   
    
    })
    .catch((e)=>{
        console.log(e.message)
        return "fhdghs"
    })