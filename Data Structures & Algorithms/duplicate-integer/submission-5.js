
class Solution {
    hasDuplicate(nums) {
        if(nums.length<2) return false;
        nums.sort();
        for(let i=0;i<nums.length-1;i++){
            if(nums[i] === nums[i+1]){
                return true;
            }
        }
        return false;
    }

    // TC: O(n^2), SC: O(1)
    hasDuplicate1(nums){
        if(nums.length<2) return false;
        for(let i=0;i<nums.length-1;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i] === nums[j]){
                    return true;
                }
            }
        }
        return false;
    }
}