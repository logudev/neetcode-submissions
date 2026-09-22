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
        // Best approach using two pointer - Using while loop
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    while (l < r && !this.isAlphaNumeric(s[l])) {
      l++;
    }
    while (r > l && !this.isAlphaNumeric(s[r])) {
      r--;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
    }

    isPalindromeBF(s) {
        // Brute Force Approach
        // TC: O(n) SC: O(n)
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
