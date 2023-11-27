// var obj = {
//     name:"kavi",
//     address:"2/6D South thamarai kulam",

// };
// console.log(obj)

/********************************************** */

// // Constructor function for

// function Details(){
//     this.name
// // }
// const user = fetch("https://api.github.com/users/akshaymarch7")
// function Bicycle(name,tyrePressure){
//     this.name = name
//     this.tyrePressure = tyrePressure
//     this.changePressure = function(){
//         console.log(this)
//         console.log(this.name)
//         this.tyrePressure += 3
//     }
// }
// b1 = new Bicycle('a',1)
// b2 = new Bicycle('b',2)

// function Mechanic(name){
//     this.name = name
//     console.log(this.name)
// }
// m = new Mechanic("c")
// m.updatePressue = b1.changePressure

/********************************************** */
// var a=10

// function b(){
//     function c(){
//         console.log(a)
//     }
//     c()
// }
// b()

/********************************************** */

// const api = fetch("https://github.com")
// api.then(function(data){
//     try{
//         console.log(data)
//         throw new Error("Inside Try Block")
//     }catch(err){
//         console.log(err.message)
//         //throw new Error("Inside catch Block")
//     }
//     console.log("Hello World!!!")

// }).catch(function(err){
//     console.log(err.message)
// })

/********************************************** */

// function orderPromise(state) {
//   var promise = new Promise(function (resolve, reject) {
//     if (state === "Resolve") {
//       setTimeout(function () {
//         resolve({ data: "Hello World" });
//       }, 500);
//     } else {
//       reject(new Error("Error in Promise function!!"));
//     }
//   });

//   return promise;
// }

// var order = orderPromise("Resolve");
// console.log(order);
// order.then((data) => {
//   console.log(data);
// });


/********************************************** */

// async function data(){

// }
// var da = data();
// console.log(da)

/********************************************** */

// function Data(){
//     this.getData = function(){
//         console.log("Hello World")
//     }
// }

// var d = new Data();
// console.log(d)

var name = "kjhgkfskf"
let obj = {
    name:'kavi',
    age:29,
    getDetails: function(){
        console.log(this)
        console.log(this.name)
    }
};
console.log("Hello World")
obj.getDetails.call()