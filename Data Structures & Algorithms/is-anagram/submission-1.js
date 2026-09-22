class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

 isAnagramSorting(s, t) {
    // Using sorting
    // TC: O(2*nlog(n)) SC: O(1) or O(2*n)
    if(s.length!==t.length) {
        return false;
    }
    let sorted1 = s.split('').sort().join('');
    let sorted2 = t.split('').sort().join(''); 
    return sorted1===sorted2;
}

isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let countS = {},
    countT = {};
  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }
  for(let i in countS) {
    if(countS[i]!== countT[i]){
        return false;
    }
  }
  return true;
}


}
