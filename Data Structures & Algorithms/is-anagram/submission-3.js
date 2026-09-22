class Solution {

    // Using inbuilt sort function
    // Time complexity - O(n*logn+m*logm) - O(nlogn) -> because of length check, n===m
    // Space complexity - O(n+m) -> for intermediate array used for sorting -> O(n) -> because of length check, n===m
   isAnagramSort(s,t) {
    if(s.length !== t.length) return false;
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
   }

   isAnagram(s,t){
    if(s.length !== t.length) return false;
    let mapS = {}, mapT = {};
    for(let i=0;i<s.length;i++){
        mapS[s[i]]=(mapS[s[i]] || 0)+1;
        mapT[t[i]]=(mapT[t[i]] || 0)+1;
    }
    for(let key in mapS){
        if(mapS[key] !== mapT[key]){
            return false;
        }
    }
    return true;
   }


}
