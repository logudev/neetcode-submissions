class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSumBF(nums, target) {
        // Bruteforce TC O(n^2) SC O(1)
        for(let i=0; i<nums.length;i++){
            for(let j=i+1; j< nums.length;j++){
                if(nums[i]+nums[j] === target) {
                    return [i,j];
                }
            }
        }
        return [];
    }

    twoSum(nums, target) {
        let hash = {};
        for(let i=0;i<nums.length;i++){
            if(hash.hasOwnProperty(target-nums[i])) {
                return [hash[target-nums[i]], i]
            }
            else {
            hash[nums[i]] = i;
            }
        }
        return [0,0]
    }
}
