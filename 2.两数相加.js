/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let tail = new ListNode(0);
  const dummy = tail;
  let sum = 0;
  while (l1 || l2 || sum) {
    sum = sum + ((l1 ? l1.val : 0) + (l2 ? l2.val : 0));
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
    tail.next = new ListNode(sum % 10);
    sum = sum > 9;
    tail = tail.next;
  }
  return dummy.next;
};
// @lc code=end
