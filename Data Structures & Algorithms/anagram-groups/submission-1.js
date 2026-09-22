class Solution {
    // Time complexity: O(n)*O(mlogm)
    // Space complexity: O(m*n) => n is length of strs, m is max length of any string in strs
    groupAnagramsSort(strs){
        const res = {};  
        for(let i=0;i<strs.length;i++){
            let sortedStr = strs[i].split('').sort().join('');
            if(res[sortedStr]){
               res[sortedStr].push(strs[i]);
            }
            else{
                res[sortedStr] = [strs[i]];
            }
            
        }
        return Object.values(res);
    }  

    groupAnagrams(strs){
        const res={};
        for(let str of strs){
            let count = new Array(26).fill(0);
            for(let c of str){
                count[c.charCodeAt(0)-'a'.charCodeAt(0)]+=1;
            }
            const key = count.join(',');
            if(!res[key]){
                res[key]=[];
            }
            res[key].push(str);
        }
        return Object.values(res);
    }
}
