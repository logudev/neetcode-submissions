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
