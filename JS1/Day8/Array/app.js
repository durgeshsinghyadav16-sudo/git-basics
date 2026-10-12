// Swapping

// With third variable

// let a = 10
// let b = 20

// console.log(a , b)

// let c = a
// a = b
// b = c

// console.log(a, b)


// without third variable

// let a = 11
// let b = 12

// console.log(a , b)

// a = a + b
// b = a - b
// a = a - b

// console.log(a , b)


// reversing an array (with extra space)

// let arr = [1,2,3,4,5]

// // making an extra array

// let ans =[]

// for(let i = arr.length - 1; i >= 0; i--)
// {
//     ans.push(arr[i])
// }

// console.log(ans)



// without extra space (two pointer )

// let array = [6,7,8,9,10]

// let s = 0
// let e = array.length - 1

// while( s < e)
// {
//    let temp = array[s]
//    array[s] = array[e]
//    array[e] = temp
//    s++
//    e--

// }

// console.log(array)



// flat method

// let arr = [1,2,3,"ok",true,function(){},null , undefined,[],[]]


// 2d matrix / matrix

// let arr = [[1,2,3, [4,5,6, [7,8,9][10]]] , [11, 12,13], [21,22,23]]

// const newarr = arr.flat(Infinity)

// console.log(arr)
// console.log(newarr)
