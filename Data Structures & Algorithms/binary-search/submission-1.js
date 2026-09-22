class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    binarySearchRec(start, end, nums, target) {
        if(start > end) return -1;
        let mid = Math.round((start+end)/2);
        if(nums[mid] === target) {
            return mid;
        }
        else if(target < nums[mid]) {
            return this.binarySearch(start, mid-1, nums, target);
        }
        else {
            return this.binarySearch(mid+1, end, nums, target);
        }
    }
    searchRec(nums, target) {
        // Find midpoint
        // Check if target is equal to midpoint, if so return midpoint index
        // Check if target is lesser than or greater than midpoint
        // If less, compute midpoint from 0 to midpoint and repeat
        // If greater than, compute midpoint from midpoint+1 to length -1 and repeat

        let start = 0, end = nums.length-1;
        return this.binarySearch(start, end, nums, target);

    }


    search(nums, target) {
        // Iterative way
        let start = 0, end = nums.length-1;
        while(start <= end) {
            let mid = Math.round((start+end)/2);
            if(nums[mid]===target) {
                return mid;
            }
            else if(target<nums[mid]){
                end = mid-1;
            }
            else {
                start = mid+1;
            }
        }
        return -1;
    }
}
