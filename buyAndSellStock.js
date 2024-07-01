// Q. You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


//  prices = [7,1,5,3,6,4]


// 1st Method
// const maxProfit = function(prices){
//   let minStockPrice = prices[0] || 0
//   let profit = 0

//   for(i = 1; i < prices.length; i++){
//     if(prices[i]< minStockPrice){
//        minStockPrice = prices[i]
//     }
//     let currentProfit = prices[i]- minStockPrice
//     profit = Math.max(profit, currentProfit)
//   }
//   return profit;

// }

// const prices = [7,1,5,3,6,4]

// console.log(maxProfit(prices))


// 2nd Method

const maxProfit = function(prices){
  let globalProfit = 0
  for(let i = 0; i < prices.length -1; i++){
    for(let j = i + 1; j < prices.length; j++ ){
      const currentProfit = prices[j]- prices[i];


      if(currentProfit > globalProfit){
        globalProfit = currentProfit
      }
    }
    
  }
  return globalProfit

}

console.log(maxProfit([7,1,5,3,6,4]))


// [7, 4, 5, 3, 2]

