/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  const pricesLen = prices.length;
  let profit = 0;
  let buyPrice = Number.MAX_VALUE;
  
  
  for (let i=0; i< pricesLen; i+=1){
      const curPrice = prices[i];    
      buyPrice = Math.min(buyPrice, curPrice);
      profit = Math.max(profit, curPrice - buyPrice);
  }
  
  return profit;
};