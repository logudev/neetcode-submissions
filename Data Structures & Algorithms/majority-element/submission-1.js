class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map={};
        let max={no: null, count: 0};
        for(let num of nums){
            map[num] = (map[num] || 0)+1;
            if(max.count < map[num]){
                max = {
                    no: num,
                    count: map[num]
                }
            }
        }
        return max.no;

    }
}
