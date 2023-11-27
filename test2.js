// const data = fetch("https://api.github.com/users/kaviarasu-thuraiarasu")
// data.then((res)=>{
//    return res.json()

// }).then((val)=>{
//     //console.log(val)
//     return val
//     //throw new Error("Manual Error")
// })
// .then((dataVal)=>{
//     console.log(dataVal)
// })
// .then(()=>{
//     console.log("chain")
// }).catch((err)=>{
//     console.log(err)
//     })

// const p = new Promise((resolve, reject) =>{
//     //reject("Not Implemented!")
//     throw new Error("Not Implemented!")
// })

// p.then((res)=>{
//     console.log(res)
// },(rej)=>{
//     console.log("|||",rej)
// })
// .catch((err)=>{
// console.log("==",err)

// })

// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3,1,1,1,]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//   console.log(p);
//   console.log(p2);
//   console.log(p3);
// });
function setVal(){
    return new Promise(function(resolve, reject){
        
        setTimeout(resolve,100,"inner2")
    })
}

var p1 = new Promise(function(resolve, reject){
        
    setTimeout(resolve,100,"inner2")
})

Promise.all([p1]).then((data)=>{
console.log(data)
})


// async function getname(){
//     console.log("inner1")
//     const data = await promise()
//     console.log(data)
//     const data1 = await promise()
//     console.log("data1")
    
// }

// getname()
// console.log("outer")