class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let mySet = new Set(nums);
        let max=0;
        for(let num of nums) {
            let streak=0, curr=num;
            if(!mySet.has(num-1)){
                while(mySet.has(curr)){
                    streak++;
                    curr++;
                }
                max = Math.max(streak, max)
            }
        }
        return max;
    }
}
