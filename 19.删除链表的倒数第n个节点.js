/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let firstPointer = dummy;
  let secondPointer = dummy;
  while (n--) {
    firstPointer = firstPointer.next;
  }
  while (firstPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  secondPointer.next = secondPointer.next.next
  return dummy.next
};
// @lc code=end
