// Write a function checkEvenOdd that accepts a number and prints whetherit is even 
// or Odd
// // hint %
// function checkEvenOd(num :number){
//     if(num % 2 === 0){
//         console.log("Even Number")
//     }
//     else{
//         console.log("Odd Number")
//     }
// } 
// checkEvenOdd(3)
// checkEvenOdd(4)

// Write a function arrayOperations that creates an array of numbers, adds a number
// to the end of the array, removes the first number and middle number then print 
// the madified array

// push, shift, splice

// function arrayOperation(){
//     let num = [1,2,3,4,5,6,7]
//     num.push(9)
//     num.shift()
//     num.splice(3,1)

//     return num
// }
// let numbers = arrayOperation()
// console.log(numbers)
// Write a function multiplies the element of an array by 2 and returns the modified
// array

// [2, 4, 6]
// [4, 8, 12]

// let multiplyArray:number[] = [1,2,3,4,5]

// function multiplyTwo(arr:number[]){
//     for(let i=0; i < arr.length; i++){
//         arr[i] *= 2
//         console.log(arr)

//     }
// }    

// multiplyTwo(multiplyArray);

// console.log(2 , 4 , 5)

// write a function findlargest that accepts an array of numbers and returns the largest
// number 

// let largestNumber = array [0]
// largestNumber > array[i] =>
// largestNumber = array[i]

function largest(a){
    let num = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num){
        num = a[i];
      }
    }
    return num;
  }
  
  const arr = [1, 141, 23, 10, 9, 92];
  console.log(largest(arr));
