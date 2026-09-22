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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    // Using DFS Recursive approach
    isSameTree(p, q) {
        // Base condition 1:
        if(!p && !q) return true;
        // Base condition 2:
        if(!p || !q) return false;
        // Base condition 3:
        if(p.val !== q.val) return false;

        const isLeftSame = this.isSameTree(p.left, q.left);
        const isRightSame = this.isSameTree(p.right,q.right);

        return isLeftSame && isRightSame;
    }
}
