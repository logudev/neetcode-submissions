class Solution {
    // Bruteforce
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
    twoSumBF(nums, target) {
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]===target){
                    return [i, j];
                }
            }
        }
        return [];
    }

    twoSum(nums, target) {
        let myMap = {};
        for(let i=0;i<nums.length;i++){
            if(myMap.hasOwnProperty(target-nums[i])){
                return [myMap[target-nums[i]], i];
            }
            myMap[nums[i]] = i;
        }
        return [];
    }
}



