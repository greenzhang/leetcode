/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  var left = minDepth(root.left);
  var right = minDepth(root.right);
  if (!root.left) {
    return 1 + right;
  }
  if (!root.right) {
    return 1 + left;
  }
  return max(left, right) + 1;
};
var max = function (left, right) {
  return Math.min(left, right);
};
// @lc code=end
