/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[15,7],[9,20],[3]]
 */
// bfs
var levelOrderBottom = function(root) {
    if (!root) return []
    const stack = [root]
    const result = []
    while (stack.length) {
        const len = stack.length
        const levelRes = []
        while (len) {
            const node = stack.shift()
            levelRes.push(node.val)
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            len--
        }
        result.unshift(levelRes)
    }
    return result
};
// dfs

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return []
    var result = []
    var dfs = function(node, res, index) {
        if (!node) return 
        if (index > res.length - 1) {
            res.push([])
        }
        res[index].push(node.val)
        node.left && dfs(node.left, res, index + 1)
        node.right && dfs(node.right, res, index + 1)
    }
    dfs(root, result, 0)
    return result.reverse()
};