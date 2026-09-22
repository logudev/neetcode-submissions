/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */

    // Depth first search - Using recursion
    // Time complexity - O(n), space complexity - O(n)
    invertTreeDFSRecursive(root) {
        if(!root) return null;

        const left=this.invertTree(root.left);
        const right=this.invertTree(root.right);

        root.left=right;
        root.right=left;

        return root;
    }

    invertTree(root) {
        if(!root) return null
        const stack=[root];
        while(stack.length>0){
            const curr = stack.pop();
            [curr.left, curr.right]=[curr.right, curr.left];
            if(curr.left){
                stack.push(curr.left);
            }
            if(curr.right){
                stack.push(curr.right)
            }
        }
        return root;
    }

    invertTreeBFSIterative(root) {
        if(!root) return null;

        const queue=[root];

        while(queue.length>0){
            const current = queue.shift();
            // Swap left and right
            [current.left, current.right] = [current.right, current.left];

            /*
            Swap in traditional way
            const temp = current.left;
            current.left=current.right;
            current.right=temp;
            */

            if(current.left){
                queue.push(current.left);
            }

            if(current.right) {
                queue.push(current.right);
            }

        }


        return root;
    }
}
