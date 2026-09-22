class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicateBF(nums) {
        // Bruteforce TC O(n^2) SC O(1)
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++) {
                if(nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    hasDuplicate(nums) {
        // Using Set. TC O(n) SC O(n)
         let mySet = new Set();
        for(let i=0;i<nums.length;i++) {
             if(!mySet.has(nums[i])) {
             mySet.add(nums[i])
        }
        else {
            return true;
        }
    }
    return false;
    }

    hasDuplicateSort(nums) {
        // Using JS Sort TC O(nlogn) SC: O(n) or O(1)
        nums.sort((a,b) => a-b);
        for(let i=1;i<nums.length;i++) {
            if(nums[i] === nums[i-1]){
                return true;
            }
        }
        return false;
    }

    hasDuplicateSetLength(nums) {
        // Using Set length. TC O(n) SC O(n)
        return new Set(nums).size < nums.length;
    }
}
