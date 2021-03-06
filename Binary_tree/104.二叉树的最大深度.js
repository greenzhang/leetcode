/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    var left = maxDepth(root.left)
    var right = maxDepth(root.right)
    return max(left,right) + 1
};
var max = function (left,right) {
    return Math.max(left, right)
}
// @lc code=end

