// function data(a){
//     delete a
//     return a
// }
// console.log(data(5));

// const user={
//     name:"kavi",
//     "hello world": "Basic Program"
// }
// console.log(user);
// console.log(user["hello world"]);

// delete user["hello world"]

// console.log(user["hello world"]);

// var firstName = "Kavi"
// var lastName = "Basic Program"

// var obj ={
//     [firstName]: lastName,
// }
// console.log(obj);

// for(key in obj){
// console.log(key);
// }

// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
//   };

// for (key in nestedObject){
//     //console.log(typeof nestedObject[key]);
//     if(typeof nestedObject[key] == 'object'){
//         for(val in nestedObject[key]){
//             console.log(nestedObject[key][val]);
//         }

//         continue
//     }
//     console.log(nestedObject[key]);

   

// }

// const a = {};
// const b = {key:"b"}; 
// const c = {key:"c"};

// a[b] = 123 // Here a[b] act like a["[object object]"]
// a[c]=456// Here a[c] act like a["[object object]"]
// console.log(a[b])


// console.log([..."Hello world"])

// const user = {a:1,b:2}

// const admin={c:3,...user}
// console.log(admin)

// console.log([{c:3,...user}])







// const user = {a:1,b:2,c:3}

// const str = JSON.stringify(user,['a','c']) // Its stringy only a and c key value propertoes
// console.log(str)




// Arrow function and normal function

// var radius = 3000
// const data={
//     radius:10,
//     value:function(){
//         return this.radius // Here this will refer to data Object
//     },
//     value1:()=>{
//         return this.radius// Here this will refer to Windows Object
//     }

// }

// console.log(data.value1())


// Object referencing

// let c = {greeting:"Hello"}

// let d;
// d=c;
// c.greeting = "World"
// console.log(d.greeting)


// console.log({a:1} == {a:1}) // Both are difference in memory

// console.log({a:1} === {a:1})




// let person = {
//     name:"kavi"
// }

// user = person

// person=null
// console.log(user)




// const value = {a:10}

// const multiple =(x={... value})=>{

//     x.a = x.a*2
//     console.log(value)
// }

// multiple()
// multiple()
// multiple(value)
// multiple(value)




var obj = {
    a:1
}

var clonedObject = Object.assign({},obj) // For cloning Object

// or 
JSON.parse(JSON.stringify(obj)) // For cloning Object

//or 

var clonedObject = {...obj}// For cloning Object

console.log(clonedObject);

clonedObject.a=22
console.log(obj)
console.log(clonedObject);





