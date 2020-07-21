/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  var path = [];
  if (!root) {
    return path;
  }
  if (!root.left && !root.right) {
    path.push(root.val.toString());
    return path;
  }
  var left = binaryTreePaths(root.left);
  var right = binaryTreePaths(root.right);
  path.push(...left.map((item) => root.val + "->" + item));
  path.push(...right.map((item) => root.val + "->" + item));
  return path;
};
// @lc code=end
