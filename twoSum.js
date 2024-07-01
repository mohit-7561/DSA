// Q. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

const twoSum = function(num, target){
  for(let i = 0; i < num.length; i++){
    for(let j = i + 1; j< num.length; j++){
      if(num[i] + num[j] === target){
        return [i , j]
      }
    }
  }
}
const num = [3, 4, 5, 9, 6]
const target = 15
console.log(twoSum(num, target))
