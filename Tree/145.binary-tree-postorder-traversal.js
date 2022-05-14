/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    const res = []
    const stack = []
    while(root!==null || stack.length) {
        while(root!==null) {
            stack.push(root)
            res.push(root.val)
            root = root.right
        }
        const cur = stack.pop()
        root = cur.left
    }
    return res.reverse()
};