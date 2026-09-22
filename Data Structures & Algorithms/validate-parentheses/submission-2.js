class Solution {
    isValidBF(s) {
        while(s.includes('()') || s.includes('[]') || s.includes('{}')){
            s=s.replace('{}', '');
            s=s.replace('[]', '');
            s=s.replace('()', '');
        }
        return s === '';
    }

    isValid1(s) {
        let closeToOpenMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        let stack = [];
        for(let c of s) {
            if((stack.length!==0) && (stack[stack.length-1] === closeToOpenMap[c]))  {
                //Pop
                stack.pop();
            }
            else {
                //Push
                stack.push(c);
            }
        }
        return stack.length === 0;
    }




        isValid(s) {
            let stack=[];
            let closeToOpenMap = {
                ')': '(',
                ']': '[',
                '}': '{'
            };
            for(let i=0;i<s.length;i++){
                if(stack.length !== 0 && stack[stack.length-1] === closeToOpenMap[s[i]]){
                    stack.pop();
                }
                else {
                    stack.push(s[i]);
                }
            }
            return stack.length===0;
        }
}




























