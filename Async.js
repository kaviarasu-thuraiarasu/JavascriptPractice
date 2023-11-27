const user = fetch("https://api.github.com/users/akshaymarch7")

var p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("P1 Resolved")
    },20000)

})

var p2 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("P2 Resolved")
    },40000)

})


async function handleAsync(){
    try{
        console.log("Start Function")
        var val = await p1
        console.log(val)
        var val1 = await p2
        console.log(val1)
    }catch(e){
        console.log(e)
    }
    

}

// Handle error in two way, one is using try/catch and another one is by then().catch()
// handleAsync()

handleAsync().then().catch(e)
console.log("End")