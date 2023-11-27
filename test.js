// Map-Array Pollyfills

Array.prototype.myMap = function (callback){

    var temp = []
    for(var i = 0;i<this.length;i++){
        temp.push(callback(this[i],i,this))
    }
    return temp

}

var arr = [1,2,3,4];
var cutomMapArray = arr.myMap((element,index,array)=>{

    return element*index;
})

//console.log(cutomMapArray)


// Filter-Array Pollyfills

Array.prototype.myFilter = function (callback){

    var temp = []
    for(i=0;i<this.length;i++){
       // temp.push(callback)
       if(callback(this[i],i,this)){
        temp.push(this[i])
       }
    }
    return temp

}

var arr1 = [81,2,3,4,5,6]

var filterArray = arr1.myFilter((element,index,array)=>{

    return element>3

})

//console.log(filterArray)


Array.prototype.myReduce = function(callback,initialValue){
  var initialValue = initialValue

  for(var i=0;i<this.length;i++){
    if(initialValue==undefined){
        initialValue = this[i]
    }else{
        initialValue = callback(initialValue,this[i],i,this) 
    }
  }
  return initialValue

}

var arr2 = [1,2,2]
var reduceValue = arr2.myReduce((previousValue,currentValue,index,array)=>{
  return previousValue + currentValue
},0)
console.log(reduceValue)
// const numArr = [0,1,2,3,4,5]

// const newArray = numArr.map((elem,index,array)=>{
//   // console.log(elem,index,array)
//   return elem*10

// })

// console.log(newArray)


// const filterArray = numArr.filter((elem,index,array)=>{

//   return elem<=3

// })

// console.log(filterArray)


// const reduceArray = numArr.reduce((previousValue,currentValue,index,array)=>{
//   //console.log(previousValue,currentValue,index,array)
//   //previousValue = previousValue + currentValue
//  // return previousValue
//  return previousValue + currentValue
// },0)

// console.log(reduceArray)

// let obj ={
//     name:"kavi",
//     age:33,
//     print1:function(){
//         console.log(this);
//         function print2(){
//             console.log(this);
//         }
//         print2();
//     }
// }

// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function (){
//       console.log(this)
//       const print2 = () => {
//         console.log(this)
//       }
      
//       print2()
//     }
//   }
  
//   obj.print()