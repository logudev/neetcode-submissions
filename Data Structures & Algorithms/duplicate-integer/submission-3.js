class Solution {

    // Bruteforce solution
    // Time Complexity - O(n^2)
    // Space Complexity - O(1)
    hasDuplicateBF(nums){
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i] === nums[j]){
                    return true;
                }
            }
        }
        return false;
    }

    // Using sorting 
    // 
    hasDuplicate(nums){
        nums = nums.sort((a,b) => (a-b));
        for(let i=1;i<nums.length;i++){
            if(nums[i]===nums[i-1]){
                return true;
            }
        }
        return false;
    }

}