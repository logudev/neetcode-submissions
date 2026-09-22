class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let i=0;i<nums.length;i++){
            map[nums[i]] = (map[nums[i]] || 0)+1;
        }
        return Object.entries(map) // Gives object entries as array 
                .sort((a,b) => (b[1]-a[1])) // Sorting them based on frequency
                .map(a => a[0]) // Filtering them just to have elements in array and not frequency
                .slice(0,k); // Slicing the top k elements

    }
}
