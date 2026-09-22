class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();
        while(!set.has(n)) {
            set.add(n);
            n = this.findSquareOfDigits(n);
            if(n===1) return true;
        }
        return false;
    }

    findSquareOfDigits(n) {
        let square=0;
        while(n!=0) {
            let digit = n%10;
            square = square+ Math.pow(digit, 2);
            n = Math.floor(n/10);
        }
        return square;
    }
}
