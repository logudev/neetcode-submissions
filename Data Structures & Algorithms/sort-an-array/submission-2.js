class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    merge(arr, low, mid, high){
        let temp = [];
        let left = low, right=mid+1;

        while(left <=mid && right<=high){
            if(arr[left] <= arr[right]){
                temp.push(arr[left]);
                left++;
            }
            else {
                temp.push(arr[right]);
                right++;
            }
        }

        while(left <= mid){
            temp.push(arr[left]);
            left++;
        }

        while(right <= high){
            temp.push(arr[right]);
            right++;
        }

        for(let i=low; i<=high;i++){
            arr[i] = temp[i-low];
        }


    }

    mergeSort(arr, low, high) {
        // Base condition
        if(low>=high){
            return;
        }
        const mid = Math.floor((low+high)/2);
        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid+1, high);

        this.merge(arr, low, mid, high);
        return arr;
    }

    sortArray(nums) {
        if(!nums || nums.length < 2 ) return nums;
        return this.mergeSort(nums, 0, nums.length-1);
    }
}
