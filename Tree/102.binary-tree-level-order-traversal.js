/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const stack = [ [ root ] ]
    const res = []
    while(stack.length) {
        const levelRes = []
        const level = stack.pop()
        const newLevel = []
        while(level.length) {
            const node = level.shift()
            levelRes.push(node.val)
            node.left && newLevel.push(node.left)
            node.right && newLevel.push(node.right)
        }
        res.push(levelRes)
        newLevel.length && stack.push(newLevel)
    }
    return res
};
