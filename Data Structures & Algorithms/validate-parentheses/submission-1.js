class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValidBF(s) {
        // Brute force solution without stack
        // TC: O(n^2) SC: O(n)
        while(s.includes('()') || s.includes('[]') || s.includes('{}')){
            s = s.replace('()', '');
            s = s.replace('{}', '');
            s = s.replace('[]', '')
        }
        return s === '';
    }

    isValid(s) {
        let stack = [];
        let closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for(let c of s) {
            if(stack.length > 0 && (stack[stack.length-1] === closeToOpen[c])) {
                stack.pop();
            }
            else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}


