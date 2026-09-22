class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k=k;
        this.nums=nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        const sortedNums = this.nums.sort((a,b) => (a-b));
        return sortedNums[sortedNums.length-this.k];
    }
}
