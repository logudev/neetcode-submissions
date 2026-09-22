class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Brute force method
        // TC: O(n^2) SC: O(1)
        let max = 0;
        for(let i=0;i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++) {
                max = Math.max(max, prices[j]-prices[i]);
            }
        }
        return max;
    }
}
