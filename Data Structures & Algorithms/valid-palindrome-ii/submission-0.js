class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if(this.isPalindrome(s)) return true;
        for(let i=0;i<s.length;i++){
            let newS = s.slice(0,i)+s.slice(i+1);
            if(this.isPalindrome(newS)){
                return true;
            }
        }
        return false;
    }

    isPalindrome(s){
        for(let i=0;i<s.length;i++){
            if(s[i] !== s[s.length-i-1]){
                return false;
            }
        }
        return true;
    }
}
