class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(c) {
        return (c >= 'a' && c <= 'z' ||
                c >= 'A' && c <= 'Z' ||
                c >= '0' && c <= '9');
    }

    isPalindrome(s) {
        s = s.trim();
        let newString = '';
        for(let c of s) {
            if(this.isAlphaNumeric(c)) {
                newString = newString+c.toLowerCase();
            }
        }
        return newString === newString.split('').reverse().join('');
    }

    isPalindrome1(s) {
        // Two pointer with for loop
        // TC: O(n) SC: O(n) -> Using additional array, can be improved
        s = s.toLowerCase().trim().split('');
        s = s.filter((c) => this.isAlphaNumeric(c));
        let length = s.length;
        for(let i=0;i<length/2;i++){
            if(s[i] !== s[length-i-1]) {
                return false;
            }
        }
        return true;
    }
}
