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

    reverseList(head){
        let prev=null, curr=head
        while(curr!==null){
            let temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        return prev;
    }
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return head;
        // 3 steps
        // S1: Find middle of l.list
        // S2: Detach 2nd half and reverse it
        // S3: Merge first half and second half

        // S1: Find middle
        let slow=head, fast=head;
        while(fast!==null && fast.next!==null){
            slow=slow.next;
            fast=fast.next.next;
        }

        //S2a: Detach second list
        let head2=slow.next;
        slow.next=null;

        //S2b: Reverse second list
        head2=this.reverseList(head2);

        //S3 : Merge two lists head, head2
        let left=head, right=head2;
        while(right!==null){
            let t1=left.next;
            let t2=right.next;

            left.next=right;
            right.next=t1;

            left=t1;
            right=t2;
        }
        return head;
    }
}
