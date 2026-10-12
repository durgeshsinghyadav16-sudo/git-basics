// let obj = {
//     name : "Durgesh",
//     age : 21,
//     city : "Noida"
// }

// Object.freeze(obj)  // No changes in object like - add, delete and update  

// obj.name = "Pradeep"
// delete obj.age
// obj.country = "India"

// console.log(obj);


// Object.seal(obj)  // only change the object values

// obj.age = 25
// delete obj.name
// obj.country = "India"

// console.log(obj);


// Object.preventExtensions(obj)  // delete and change the values in an object, not add any values

// obj.name = "Pradeep"
// delete obj.age
// obj.country = "America"

// console.log(obj) 


// let arr = [1,2,3,4,5]
// let obj = {
//     name : "D",
//     age : 21
// }

// ... -> spread operator / rest operator

// let arr2 = arr
// let arr2 = [...arr]

// let obj2 = obj
// let obj2 = {...obj}



// arr2.push(6)
// obj2.name = "P"



// console.log(arr)
// console.log(arr2)
// console.log(obj)
// console.log(obj2)



// let person1 = {
//     name : "Alex",
//     age : 32,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     cars : ["BMW", "Alto"]
// }

// let persson2 = {...person1}
// let person2 = structuredClone(person1)

// person2.name = "Dustin"
// person2.cars.push("Ferrari")
// person2.address.city = "Pune"

// console.log(person1)
// console.log(person2)


// let arr = [1,2,3,4]

// let obj = {
//     name : "S",
//     age : 23
// }

// const jsonArr = JSON.stringify(arr)
// const jsonObj = JSON.stringify(obj)

// const val = JSON.parse(jsonArr)
// console.log(val)
// console.log(val[3])

// const val2 = JSON.parse(jsonObj)

// // console.log(jsonArr)
// // console.log(jsonObj)

// console.log(obj)
// console.log(obj.name)



// let person1 = {
//     name : "Alex",
//     age : 32,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     cars : ["BMW", "Alto"],
//     sayHi : () => {
//         console.log("Hello")
//     }
// }

// let person2 = structuredClone(person1)  // error
// let str = JSON.stringify(person1)  // no error , but function wont be copied
// let person2 = JSON.parse(str)

// console.log(person1)
// console.log(person2)


// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2 = [4,5,6]

// const arr3 = arr.concat(arr2)
// console.log(arr3)
// const val = [-1,...arr,...arr2,100]  // spread
// console.log(val)

// const[a,b,...val] = arr // rest
// console.log(a,b)
// console.log(val)


// function sum(...data) // rest
// {
//     let sum = 0
//     for (let item of data)
//     {
//         sum += item
//     }
//     return sum
// }
// console.log(sum(10,20))




