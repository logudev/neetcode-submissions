class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix=strs[0];

        let out = '';

        for(let i=0;i<prefix.length;i++){
            let c = prefix[i];
            let check = true;
            for(let j=1;j<strs.length;j++){
                
                if(strs[j][i] !== c){
                    check = false;
                }
            }
            if(!check){
                return out;
            }
            else {
                out = out+c;
            }
        }
        return out;
    }
}
