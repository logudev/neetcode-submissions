class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne1(digits) {
        for(let i=digits.length-1;i>=0;i--){
            if(digits[i]<9){
                digits[i]++;
                return digits;
            }
            digits[i]=0;
        }      
    // We reach here, only when no is all 9s, now digits will be all 0s
    // Add 1 in the front
    digits.unshift(1);
    return digits;
    }


    plusOne(digits){
        for(let i=digits.length-1;i>=0;i--){
            if(digits[i]<9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }

            // We have reached here only when it is all 9s
            // So, digits will be all 0s
            // Add carry over 1 to front
            digits.unshift(1);
            return digits;
    }
}
