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

    twoSumOnePass(nums, target) {
        // One Pass using inbuilt object. TC: O(n) SC: O(n)
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

twoSum(nums, target) {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];
    if (hash.has(value)) {
      return [hash.get(value), i];
    } else {
      hash.set(nums[i], i);
    }
  }
  return [0, 0];
}
}
