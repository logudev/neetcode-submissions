/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    addLLNode(val, head) {
        let temp = head;
        while(temp.next!==null){
            temp=temp.next;
        }
        temp.next = new ListNode(val, null);
    }

    
    reverseList(head) {
        if(head===null || head.next===null) return head;
        // Brute Force
        let temp = head;
        let tempArray = [];
        while(temp!==null) {
            tempArray.push(temp.val);
            temp = temp.next;
        }
        tempArray = tempArray.reverse();
        const newHead = new ListNode(tempArray[0]);
        for(let i =1;i<tempArray.length;i++){
            this.addLLNode(tempArray[i], newHead);
        }
        return newHead;
    }
}
