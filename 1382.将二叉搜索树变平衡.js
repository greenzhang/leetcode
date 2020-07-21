/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  var list = [];
  function inOrder(node) {
    if (!node) {
      return [];
    }
    inOrder(node.left);
    list.push(node.val);
    inOrder(node.right);
  }
  function build(left, right) {
      let mid =
  }
  inOrder(root);
  if (nodeList.length < 3) return root;
  return build(0, list.length - 1);
};
// @lc code=end
