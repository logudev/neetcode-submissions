class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length>1) {
            stones = stones.sort((a,b) => (a-b));

            const curr = stones.pop()-stones.pop();
            if(curr) {
                stones.push(curr);
            }
        }
        return stones[0] || 0;
    }
}
