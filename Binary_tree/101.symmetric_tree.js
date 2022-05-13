/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return helper(root, root);
};
var helper = function (nodeA, nodeB) {
    let queue = [ nodeA, nodeB ]
    while(queue.length) {
        const ANode = queue.shift()
        const BNode = queue.shift()
        if (!ANode && !BNode) continue;
        if ((!ANode || !BNode) || (ANode.val !== BNode.val)) return false
        queue.push(ANode.left)
        queue.push(BNode.right)
        queue.push(BNode.left)
        queue.push(ANode.right)
    }
    return true
}
