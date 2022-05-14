/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const stack = []
    const res = []
    while(root !== null || stack.length) {
        while(root !== null) {
            stack.push(root)
            res.push(root.val)
            root = root.left
        }
        const cur = stack.pop()
        root = cur.right
    }
    return res
};
